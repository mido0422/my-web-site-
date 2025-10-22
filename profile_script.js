// Profile Page JavaScript

// Go back to main page
function goBack() {
    window.location.href = 'index.html';
}

// Logout function
function logout() {
    showCustomAlert({
        icon: '👋',
        title: 'Гарах уу?',
        message: 'Та системээс гарахдаа итгэлтэй байна уу?',
        confirmText: 'Тийм, гарах',
        cancelText: 'Үгүй',
        onConfirm: () => {
            localStorage.removeItem('currentUser');
            showToast('success', '✅ Амжилттай гарлаа!');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }
    });
}

// Load user data on page load
document.addEventListener('DOMContentLoaded', function() {
    loadUserProfile();
});

// Load user profile data
function loadUserProfile() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // If no user, check japanUser
    if (!currentUser) {
        currentUser = JSON.parse(localStorage.getItem('japanUser'));
    }
    
    // If still no user, create demo user for testing
    if (!currentUser) {
        currentUser = {
            id: 1,
            name: 'Болд Б.',
            email: 'bold@email.com',
            phone: '+976 9999-9999',
            birthdate: '1990-01-01',
            city: 'Улаанбаатар',
            district: 'Сүхбаатар',
            address: '3-р хороо, 15-р байр',
            address2: '',
            interests: [],
            savedAddresses: [
                {
                    name: 'Болд Б.',
                    phone: '+976 9999-9999',
                    city: 'Улаанбаатар',
                    district: 'Сүхбаатар',
                    address: '3-р хороо, 15-р байр',
                    type: 'Гэр',
                    isDefault: true
                }
            ]
        };
        // Save demo user
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        localStorage.setItem('japanUser', JSON.stringify(currentUser));
    }

    // Populate header
    document.getElementById('headerUserName').textContent = currentUser.name || 'Хэрэглэгч';

    // Populate profile banner
    document.getElementById('profileName').textContent = currentUser.name || 'Хэрэглэгч';
    document.getElementById('profileEmail').textContent = currentUser.email || '';
    
    // Load profile photo if exists
    if (currentUser.profilePhoto) {
        const profilePhotoElement = document.getElementById('profilePhoto');
        if (profilePhotoElement) {
            profilePhotoElement.src = currentUser.profilePhoto;
        }
    }

    // Populate form fields
    const form = document.querySelector('.profile-form');
    if (currentUser.name) form.querySelector('[name="fullName"]').value = currentUser.name;
    if (currentUser.phone) form.querySelector('[name="phone"]').value = currentUser.phone;
    if (currentUser.email) form.querySelector('[name="email"]').value = currentUser.email;
    if (currentUser.birthdate) form.querySelector('[name="birthdate"]').value = currentUser.birthdate;
    if (currentUser.city) form.querySelector('[name="city"]').value = currentUser.city;
    if (currentUser.district) form.querySelector('[name="district"]').value = currentUser.district;
    if (currentUser.address) form.querySelector('[name="address"]').value = currentUser.address;
    if (currentUser.address2) form.querySelector('[name="address2"]').value = currentUser.address2;

    // Load interests
    if (currentUser.interests && Array.isArray(currentUser.interests)) {
        currentUser.interests.forEach(interest => {
            const checkbox = form.querySelector(`[name="interest"][value="${interest}"]`);
            if (checkbox) checkbox.checked = true;
        });
    }

    // Load saved addresses
    loadSavedAddresses();
}

// Save profile changes
function saveProfile(e) {
    e.preventDefault();
    
    const form = e.target;
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

    // Get form data
    const formData = {
        name: form.querySelector('[name="fullName"]').value,
        phone: form.querySelector('[name="phone"]').value,
        email: form.querySelector('[name="email"]').value,
        birthdate: form.querySelector('[name="birthdate"]').value,
        city: form.querySelector('[name="city"]').value,
        district: form.querySelector('[name="district"]').value,
        address: form.querySelector('[name="address"]').value,
        address2: form.querySelector('[name="address2"]').value,
        interests: Array.from(form.querySelectorAll('[name="interest"]:checked')).map(cb => cb.value)
    };

    // Keep existing data that's not in the form
    const updatedUser = { 
        ...currentUser, 
        ...formData,
        // Preserve these fields
        id: currentUser.id,
        profilePhoto: currentUser.profilePhoto,
        savedAddresses: currentUser.savedAddresses || []
    };

    // Save to localStorage - both currentUser and japanUser
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    localStorage.setItem('japanUser', JSON.stringify(updatedUser));

    // Update all users array
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === updatedUser.email);
    if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Update display
    document.getElementById('headerUserName').textContent = updatedUser.name;
    document.getElementById('profileName').textContent = updatedUser.name;
    document.getElementById('profileEmail').textContent = updatedUser.email;

    showToast('success', '✅ Мэдээлэл амжилттай хадгалагдлаа!');
}

// Reset profile form
function resetProfile() {
    showCustomAlert({
        icon: '🔄',
        title: 'Өөрчлөлт буцаах уу?',
        message: 'Таны оруулсан бүх өөрчлөлтүүдийг буцаах уу?',
        confirmText: 'Тийм, буцаах',
        cancelText: 'Үгүй',
        onConfirm: () => {
            loadUserProfile();
            showToast('success', '🔄 Өөрчлөлтүүд буцаагдлаа!');
        }
    });
}

// Change profile photo
function changeProfilePhoto() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                showToast('error', '❌ Зургийн хэмжээ 5MB-аас их байна!');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageData = event.target.result;
                
                // Update display
                document.getElementById('profilePhoto').src = imageData;
                
                // Save to localStorage
                const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
                currentUser.profilePhoto = imageData;
                
                // Save to both storage keys
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                localStorage.setItem('japanUser', JSON.stringify(currentUser));
                
                // Update users array
                let users = JSON.parse(localStorage.getItem('users')) || [];
                const userIndex = users.findIndex(u => u.email === currentUser.email);
                if (userIndex !== -1) {
                    users[userIndex] = currentUser;
                    localStorage.setItem('users', JSON.stringify(users));
                }
                
                showToast('success', '✅ Профайл зураг амжилттай солигдлоо!');
            };
            reader.readAsDataURL(file);
        }
    };
    
    input.click();
}

// Load saved addresses
function loadSavedAddresses() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    const addresses = currentUser.savedAddresses || [];
    
    const container = document.getElementById('savedAddressesList');
    
    if (addresses.length === 0) {
        container.innerHTML = '<p style="color: #718096; text-align: center; padding: 2rem;">Хадгалсан хаяг байхгүй байна.</p>';
        return;
    }
    
    container.innerHTML = addresses.map((addr, index) => `
        <div class="address-item ${addr.isDefault ? 'default-address' : ''}">
            <div class="address-header">
                <div class="address-type">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                    <strong>${addr.type || 'Хаяг'}</strong>
                </div>
                ${addr.isDefault ? '<span class="default-badge">Үндсэн</span>' : ''}
            </div>
            <div class="address-content">
                <p>${addr.name || ''}</p>
                <p>${addr.phone || ''}</p>
                <p>${addr.city || ''}, ${addr.district || ''}, ${addr.address || ''}</p>
            </div>
            <div class="address-actions">
                <button type="button" class="addr-btn-edit" onclick="editAddress(${index})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    Засах
                </button>
                <button type="button" class="addr-btn-delete" onclick="deleteAddress(${index})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    Устгах
                </button>
            </div>
        </div>
    `).join('');
}

// Open add address modal
function openAddAddressModal() {
    const name = prompt('👤 Хүлээн авагчийн нэр:', '');
    if (!name) return;
    
    const phone = prompt('📱 Утасны дугаар:', '');
    if (!phone) return;
    
    const city = prompt('🏙️ Хот/Аймаг:', 'Улаанбаатар');
    if (!city) return;
    
    const district = prompt('📍 Дүүрэг/Сум:', '');
    if (!district) return;
    
    const address = prompt('🏠 Дэлгэрэнгүй хаяг:', '');
    if (!address) return;
    
    const type = prompt('🏷️ Хаягийн төрөл (Гэр/Ажил/Бусад):', 'Гэр');
    
    const isDefault = confirm('⭐ Үндсэн хаяг болгох уу?');
    
    const newAddress = {
        name,
        phone,
        city,
        district,
        address,
        type: type || 'Гэр',
        isDefault
    };
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    currentUser.savedAddresses = currentUser.savedAddresses || [];
    
    // If this is set as default, remove default from others
    if (isDefault) {
        currentUser.savedAddresses.forEach(addr => addr.isDefault = false);
    }
    
    currentUser.savedAddresses.push(newAddress);
    
    // Save to both storage keys
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('japanUser', JSON.stringify(currentUser));
    
    // Update users array
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    loadSavedAddresses();
    showToast('success', '✅ Хаяг амжилттай нэмэгдлээ!');
}

// Edit address
function editAddress(index) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    const addresses = currentUser.savedAddresses || [];
    const addr = addresses[index];
    
    if (!addr) return;
    
    const name = prompt('👤 Хүлээн авагчийн нэр:', addr.name);
    if (name === null) return;
    
    const phone = prompt('📱 Утасны дугаар:', addr.phone);
    if (phone === null) return;
    
    const city = prompt('🏙️ Хот/Аймаг:', addr.city);
    if (city === null) return;
    
    const district = prompt('📍 Дүүрэг/Сум:', addr.district);
    if (district === null) return;
    
    const address = prompt('🏠 Дэлгэрэнгүй хаяг:', addr.address);
    if (address === null) return;
    
    const type = prompt('🏷️ Хаягийн төрөл (Гэр/Ажил/Бусад):', addr.type);
    
    const isDefault = confirm(`⭐ Үндсэн хаяг болгох уу? (Одоо: ${addr.isDefault ? 'Тийм' : 'Үгүй'})`);
    
    // If this is set as default, remove default from others
    if (isDefault) {
        addresses.forEach(a => a.isDefault = false);
    }
    
    addresses[index] = {
        name,
        phone,
        city,
        district,
        address,
        type: type || addr.type,
        isDefault
    };
    
    currentUser.savedAddresses = addresses;
    
    // Save to both storage keys
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('japanUser', JSON.stringify(currentUser));
    
    // Update users array
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    loadSavedAddresses();
    showToast('success', '✅ Хаяг амжилттай засагдлаа!');
}

// Delete address
function deleteAddress(index) {
    showCustomAlert({
        icon: '🗑️',
        title: 'Хаяг устгах уу?',
        message: 'Энэ хаягийг устгахдаа итгэлтэй байна уу?',
        confirmText: 'Тийм, устгах',
        cancelText: 'Үгүй',
        onConfirm: () => {
            const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
            const addresses = currentUser.savedAddresses || [];
            
            addresses.splice(index, 1);
            currentUser.savedAddresses = addresses;
            
            // Save to both storage keys
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            localStorage.setItem('japanUser', JSON.stringify(currentUser));
            
            // Update users array
            let users = JSON.parse(localStorage.getItem('users')) || [];
            const userIndex = users.findIndex(u => u.email === currentUser.email);
            if (userIndex !== -1) {
                users[userIndex] = currentUser;
                localStorage.setItem('users', JSON.stringify(users));
            }
            
            loadSavedAddresses();
            showToast('success', '✅ Хаяг амжилттай устгагдлаа!');
        }
    });
}

// Show points history
function showPointsHistory() {
    const historyData = [
        { date: '2024-10-15', type: 'earn', amount: '+250', description: 'Захиалга #1234' },
        { date: '2024-10-10', type: 'use', amount: '-100', description: 'Хөнгөлөлт ашигласан' },
        { date: '2024-10-05', type: 'earn', amount: '+180', description: 'Захиалга #1233' },
        { date: '2024-10-01', type: 'bonus', amount: '+500', description: 'Төрсөн өдрийн бонус' },
        { date: '2024-09-25', type: 'earn', amount: '+320', description: 'Захиалга #1232' },
        { date: '2024-09-20', type: 'referral', amount: '+200', description: 'Найз урьсан' },
        { date: '2024-09-15', type: 'earn', amount: '+150', description: 'Захиалга #1231' },
        { date: '2024-09-10', type: 'use', amount: '-200', description: 'Хөнгөлөлт ашигласан' }
    ];
    
    const historyHTML = historyData.map(item => {
        let icon, colorClass;
        switch(item.type) {
            case 'earn':
                icon = '💰';
                colorClass = 'earn';
                break;
            case 'use':
                icon = '🛍️';
                colorClass = 'use';
                break;
            case 'bonus':
                icon = '🎁';
                colorClass = 'bonus';
                break;
            case 'referral':
                icon = '👥';
                colorClass = 'referral';
                break;
        }
        
        return `
            <div class="history-item">
                <div class="history-icon">${icon}</div>
                <div class="history-info">
                    <strong>${item.description}</strong>
                    <p>${item.date}</p>
                </div>
                <div class="history-amount ${colorClass}">${item.amount}</div>
            </div>
        `;
    }).join('');
    
    const modal = document.createElement('div');
    modal.className = 'points-history-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="this.parentElement.remove()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>📊 Оноо түүх</h3>
                <button class="modal-close" onclick="this.closest('.points-history-modal').remove()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                ${historyHTML}
            </div>
        </div>
        <style>
            .points-history-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.5);
                backdrop-filter: blur(5px);
            }
            .modal-content {
                position: relative;
                background: white;
                border-radius: 20px;
                width: 90%;
                max-width: 600px;
                max-height: 80vh;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                animation: modalSlideIn 0.3s ease;
            }
            @keyframes modalSlideIn {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem 2rem;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
            }
            .modal-header h3 {
                font-size: 1.5rem;
                margin: 0;
            }
            .modal-close {
                background: rgba(255,255,255,0.2);
                border: none;
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .modal-close:hover {
                background: rgba(255,255,255,0.3);
                transform: rotate(90deg);
            }
            .modal-body {
                padding: 1.5rem 2rem;
                max-height: 60vh;
                overflow-y: auto;
            }
            .history-item {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                background: #f7fafc;
                border-radius: 10px;
                margin-bottom: 0.75rem;
            }
            .history-icon {
                font-size: 2rem;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: white;
                border-radius: 50%;
            }
            .history-info {
                flex: 1;
            }
            .history-info strong {
                display: block;
                color: #2d3748;
                margin-bottom: 0.25rem;
            }
            .history-info p {
                color: #718096;
                font-size: 0.9rem;
            }
            .history-amount {
                font-size: 1.25rem;
                font-weight: 700;
            }
            .history-amount.earn { color: #48bb78; }
            .history-amount.use { color: #f56565; }
            .history-amount.bonus { color: #ed8936; }
            .history-amount.referral { color: #667eea; }
        </style>
    `;
    
    document.body.appendChild(modal);
}

// Change password
function changePassword() {
    const oldPassword = prompt('🔐 Одоогийн нууц үг:');
    if (!oldPassword) return;
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    
    if (oldPassword !== currentUser.password) {
        showToast('error', '❌ Одоогийн нууц үг буруу байна!');
        return;
    }
    
    const newPassword = prompt('🔑 Шинэ нууц үг (8+ тэмдэгт):');
    if (!newPassword || newPassword.length < 8) {
        showToast('error', '❌ Нууц үг 8-аас дээш тэмдэгттэй байх ёстой!');
        return;
    }
    
    const confirmPassword = prompt('✅ Шинэ нууц үг дахин оруулах:');
    if (newPassword !== confirmPassword) {
        showToast('error', '❌ Нууц үг таарахгүй байна!');
        return;
    }
    
    currentUser.password = newPassword;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update in users array
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    showToast('success', '✅ Нууц үг амжилттай солигдлоо!');
}

// View login history
function viewLoginHistory() {
    // Initialize login history in localStorage if not exists
    let loginHistory = JSON.parse(localStorage.getItem('loginHistory') || '[]');
    
    // If empty, create demo data
    if (loginHistory.length === 0) {
        loginHistory = [
            {
                id: 1,
                timestamp: new Date('2024-10-22 14:30').toISOString(),
                device: 'Chrome - Windows 11',
                browser: 'Chrome 118',
                os: 'Windows 11',
                location: 'Улаанбаатар, Монгол',
                ip: '192.168.1.100',
                status: 'success',
                isActive: true
            },
            {
                id: 2,
                timestamp: new Date('2024-10-22 09:15').toISOString(),
                device: 'Safari - iPhone 14',
                browser: 'Safari 16',
                os: 'iOS 17',
                location: 'Улаанбаатар, Монгол',
                ip: '192.168.1.101',
                status: 'success',
                isActive: false
            },
            {
                id: 3,
                timestamp: new Date('2024-10-21 18:45').toISOString(),
                device: 'Chrome - Android',
                browser: 'Chrome 117',
                os: 'Android 13',
                location: 'Улаанбаатар, Монгол',
                ip: '192.168.1.102',
                status: 'success',
                isActive: true
            },
            {
                id: 4,
                timestamp: new Date('2024-10-21 11:20').toISOString(),
                device: 'Firefox - Windows 10',
                browser: 'Firefox 119',
                os: 'Windows 10',
                location: 'Дархан, Монгол',
                ip: '192.168.2.50',
                status: 'success',
                isActive: false
            },
            {
                id: 5,
                timestamp: new Date('2024-10-20 22:30').toISOString(),
                device: 'Edge - Windows 11',
                browser: 'Edge 118',
                os: 'Windows 11',
                location: 'Улаанбаатар, Монгол',
                ip: '192.168.1.100',
                status: 'success',
                isActive: true
            },
            {
                id: 6,
                timestamp: new Date('2024-10-20 15:10').toISOString(),
                device: 'Unknown Device',
                browser: 'Unknown Browser',
                os: 'Unknown OS',
                location: 'Unknown Location',
                ip: '123.45.67.89',
                status: 'failed',
                isActive: false
            }
        ];
        localStorage.setItem('loginHistory', JSON.stringify(loginHistory));
    }
    
    // Calculate stats
    const totalLogins = loginHistory.filter(h => h.status === 'success').length;
    const activeDevices = loginHistory.filter(h => h.isActive).length;
    const failedAttempts = loginHistory.filter(h => h.status === 'failed').length;
    
    // Update stats
    document.getElementById('totalLogins').textContent = totalLogins;
    document.getElementById('activeDevices').textContent = activeDevices;
    document.getElementById('failedAttempts').textContent = failedAttempts;
    
    // Render history
    renderLoginHistory(loginHistory, 'all');
    
    // Show modal
    document.getElementById('loginHistoryModal').style.display = 'flex';
}

function closeLoginHistory() {
    document.getElementById('loginHistoryModal').style.display = 'none';
}

function renderLoginHistory(history, filter = 'all') {
    const listContainer = document.getElementById('loginHistoryList');
    
    // Filter history
    let filteredHistory = history;
    if (filter === 'success') {
        filteredHistory = history.filter(h => h.status === 'success');
    } else if (filter === 'failed') {
        filteredHistory = history.filter(h => h.status === 'failed');
    }
    
    // Sort by timestamp (newest first)
    filteredHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    if (filteredHistory.length === 0) {
        listContainer.innerHTML = `
            <div class="history-empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <h3>Түүх олдсонгүй</h3>
                <p>Одоогоор нэвтрэх түүх байхгүй байна.</p>
            </div>
        `;
        return;
    }
    
    const historyHTML = filteredHistory.map(item => {
        const date = new Date(item.timestamp);
        const timeAgo = getTimeAgo(date);
        const dateStr = formatDate(date);
        
        const deviceIcon = getDeviceIcon(item.device);
        
        return `
            <div class="history-item ${item.status}">
                <div class="history-item-left">
                    <div class="history-icon ${item.status}">
                        ${item.status === 'success' ? `
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        ` : `
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="15" y1="9" x2="9" y2="15"></line>
                                <line x1="9" y1="9" x2="15" y2="15"></line>
                            </svg>
                        `}
                    </div>
                    <div class="history-details">
                        <h4>${item.status === 'success' ? 'Амжилттай нэвтэрсэн' : 'Нэвтрэх амжилтгүй'}</h4>
                        <div class="history-device">
                            ${deviceIcon}
                            <span>${item.device}</span>
                        </div>
                        <div class="history-location">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>${item.location} • IP: ${item.ip}</span>
                        </div>
                    </div>
                </div>
                <div class="history-item-right">
                    <div class="history-time">${timeAgo}</div>
                    <span class="history-status ${item.isActive ? 'active' : item.status}">
                        ${item.isActive ? '🟢 Идэвхтэй' : item.status === 'success' ? '✅ Амжилттай' : '❌ Амжилтгүй'}
                    </span>
                </div>
            </div>
        `;
    }).join('');
    
    listContainer.innerHTML = historyHTML;
}

function getDeviceIcon(device) {
    if (device.includes('iPhone') || device.includes('iOS')) {
        return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>`;
    } else if (device.includes('Android')) {
        return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>`;
    } else {
        return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>`;
    }
}

function getTimeAgo(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'Дөнгөж сая';
    if (minutes < 60) return `${minutes} минутын өмнө`;
    if (hours < 24) return `${hours} цагийн өмнө`;
    if (days === 1) return 'Өчигдөр';
    if (days < 7) return `${days} өдрийн өмнө`;
    
    return formatDate(date);
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function filterHistory(type) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Get history and render
    const loginHistory = JSON.parse(localStorage.getItem('loginHistory') || '[]');
    renderLoginHistory(loginHistory, type);
}

function exportLoginHistory() {
    const loginHistory = JSON.parse(localStorage.getItem('loginHistory') || '[]');
    
    if (loginHistory.length === 0) {
        showToast('warning', '⚠️ Татах түүх байхгүй байна');
        return;
    }
    
    // Create CSV content
    const headers = ['Огноо', 'Төхөөрөмж', 'Хөтөч', 'Үйлдлийн систем', 'Байршил', 'IP Хаяг', 'Төлөв', 'Идэвхтэй'];
    const rows = loginHistory.map(item => {
        const date = formatDate(new Date(item.timestamp));
        return [
            date,
            item.device,
            item.browser,
            item.os,
            item.location,
            item.ip,
            item.status === 'success' ? 'Амжилттай' : 'Амжилтгүй',
            item.isActive ? 'Тийм' : 'Үгүй'
        ];
    });
    
    let csvContent = headers.join(',') + '\n';
    csvContent += rows.map(row => row.join(',')).join('\n');
    
    // Download file
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `login_history_${new Date().getTime()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('success', '✅ Түүх амжилттай татагдлаа!');
}

function clearLoginHistory() {
    showCustomAlert({
        icon: '⚠️',
        title: 'Түүх устгах уу?',
        message: 'Та нэвтрэх түүхээ бүрэн устгахдаа итгэлтэй байна уу? Энэ үйлдлийг буцаах боломжгүй.',
        confirmText: 'Тийм, устгах',
        cancelText: 'Үгүй',
        onConfirm: () => {
            localStorage.setItem('loginHistory', '[]');
            showToast('success', '✅ Түүх амжилттай арилгалаа!');
            closeLoginHistory();
        }
    });
}

// Toast notification
function showToast(type, message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Custom Alert Modal
function showCustomAlert(options) {
    const {
        icon = 'ℹ️',
        title = 'Мэдэгдэл',
        message = '',
        confirmText = 'Тийм',
        cancelText = 'Үгүй',
        onConfirm = null,
        onCancel = null
    } = options;
    
    // Remove existing alert if any
    const existingAlert = document.querySelector('.custom-alert-overlay');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create alert overlay
    const alertOverlay = document.createElement('div');
    alertOverlay.className = 'custom-alert-overlay';
    
    // Create alert modal
    alertOverlay.innerHTML = `
        <div class="custom-alert-modal">
            <div class="custom-alert-icon">${icon}</div>
            <h3 class="custom-alert-title">${title}</h3>
            <p class="custom-alert-message">${message}</p>
            <div class="custom-alert-actions">
                <button class="custom-alert-btn custom-alert-confirm">${confirmText}</button>
                <button class="custom-alert-btn custom-alert-cancel">${cancelText}</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(alertOverlay);
    
    // Trigger animation
    setTimeout(() => {
        alertOverlay.classList.add('active');
    }, 10);
    
    // Get buttons
    const confirmBtn = alertOverlay.querySelector('.custom-alert-confirm');
    const cancelBtn = alertOverlay.querySelector('.custom-alert-cancel');
    
    // Confirm button click
    confirmBtn.addEventListener('click', () => {
        alertOverlay.classList.remove('active');
        setTimeout(() => {
            alertOverlay.remove();
        }, 300);
        if (onConfirm) onConfirm();
    });
    
    // Cancel button click
    cancelBtn.addEventListener('click', () => {
        alertOverlay.classList.remove('active');
        setTimeout(() => {
            alertOverlay.remove();
        }, 300);
        if (onCancel) onCancel();
    });
    
    // Click outside to close
    alertOverlay.addEventListener('click', (e) => {
        if (e.target === alertOverlay) {
            alertOverlay.classList.remove('active');
            setTimeout(() => {
                alertOverlay.remove();
            }, 300);
            if (onCancel) onCancel();
        }
    });
}
