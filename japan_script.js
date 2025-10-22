// Sample Products Data
const productsData = [
    {
        id: 1,
        name: 'iPhone 13 Pro Max 256GB',
        name_jp: 'アイフォン13プロマックス',
        category: 'electronics',
        description: 'Япон улсын албан ёсны дэлгүүрээс авсан, excellent condition. Бүх дагалдах хэрэгсэл бүтэн. Баталгаатай.',
        price_tugrik: 2450000,
        price_yen: 89800,
        old_price: 3200000,
        stock: 3,
        condition: 'Excellent',
        location: 'Tokyo, Japan',
        images: [
            'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=600',
            'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600',
            'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600',
            'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600'
        ],
        rating: 5,
        reviews_count: 127,
        badge: 'hot',
        discount_percent: 23
    },
    {
        id: 7,
        name: 'MacBook Pro M2 14" 2023',
        name_jp: 'マックブックプロM2',
        category: 'electronics',
        description: 'Apple MacBook Pro M2 chip, 16GB RAM, 512GB SSD. Япон дэлгүүрээс, хэрэглэгдээгүй шинэ. AppleCare+ баталгаа.',
        price_tugrik: 5800000,
        price_yen: 218000,
        old_price: 7200000,
        stock: 2,
        condition: 'New',
        location: 'Tokyo, Japan',
        images: [
            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
            'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600',
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600'
        ],
        rating: 5,
        reviews_count: 89,
        badge: 'new',
        discount_percent: 19
    },
    {
        id: 8,
        name: 'Canon EOS R6 Mark II',
        name_jp: 'キヤノンEOS R6マークII',
        category: 'electronics',
        description: 'Мэргэжлийн камер, full frame mirrorless. 24.2MP, 4K video. Япон улсын зөвшөөрөлтэй, баталгаатай.',
        price_tugrik: 6500000,
        price_yen: 245000,
        old_price: 8000000,
        stock: 1,
        condition: 'Excellent',
        location: 'Osaka, Japan',
        images: [
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600',
            'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600',
            'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600',
            'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600'
        ],
        rating: 5,
        reviews_count: 34,
        badge: 'hot',
        discount_percent: 19
    },
    {
        id: 9,
        name: 'Nike Air Jordan 1 Retro',
        name_jp: 'ナイキエアジョーダン1レトロ',
        category: 'fashion',
        description: 'Limited edition, Япон онцгой хувилбар. Size 42-43. Хэрэглээгүй шинэ, original box-тэй.',
        price_tugrik: 420000,
        price_yen: 15800,
        old_price: 580000,
        stock: 5,
        condition: 'New',
        location: 'Tokyo, Japan',
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600',
            'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600'
        ],
        rating: 5,
        reviews_count: 156,
        badge: 'hot',
        discount_percent: 28
    },
    {
        id: 10,
        name: 'Supreme Box Logo Hoodie',
        name_jp: 'シュプリームボックスロゴフーディ',
        category: 'fashion',
        description: 'Supreme x Japan collaboration. Size M-L. Limited edition, цөөн тоогоор гарсан. Original tags бүтэн.',
        price_tugrik: 680000,
        price_yen: 25600,
        old_price: 850000,
        stock: 3,
        condition: 'New',
        location: 'Tokyo, Japan',
        images: [
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600',
            'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600',
            'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600',
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600'
        ],
        rating: 5,
        reviews_count: 203,
        badge: 'new',
        discount_percent: 20
    },
    {
        id: 11,
        name: 'Honda Civic Parts Set',
        name_jp: 'ホンダシビック部品セット',
        category: 'auto',
        description: 'Honda Civic 2018-2022 оны загварт тохирох эд анги багц. Original Japan parts. Баталгаатай.',
        price_tugrik: 450000,
        price_yen: 16900,
        old_price: 600000,
        stock: 10,
        condition: 'New',
        location: 'Nagoya, Japan',
        images: [
            'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600',
            'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600',
            'https://images.unsplash.com/photo-1625231334168-35067f8853ed?w=600',
            'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600'
        ],
        rating: 5,
        reviews_count: 78,
        badge: 'sale',
        discount_percent: 25
    },
    {
        id: 12,
        name: 'Toyota Prius Hybrid Battery',
        name_jp: 'トヨタプリウスハイブリッドバッテリー',
        category: 'auto',
        description: 'Prius 2015-2020 оны загварт тохирох hybrid battery. Японоос шууд, баталгаатай. Installation guide орно.',
        price_tugrik: 1200000,
        price_yen: 45000,
        old_price: 1600000,
        stock: 4,
        condition: 'Excellent',
        location: 'Tokyo, Japan',
        images: [
            'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600',
            'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600',
            'https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=600',
            'https://images.unsplash.com/photo-1609630875039-91532f5dd476?w=600'
        ],
        rating: 5,
        reviews_count: 45,
        badge: 'hot',
        discount_percent: 25
    },
    {
        id: 13,
        name: 'Panasonic Air Purifier',
        name_jp: 'パナソニック空気清浄機',
        category: 'home',
        description: 'Nanoe X технологи бүхий агаар цэвэрлэгч. 40м² хүртэл талбайд. Япон улсын стандарт, баталгаатай.',
        price_tugrik: 380000,
        price_yen: 14300,
        old_price: 520000,
        stock: 8,
        condition: 'New',
        location: 'Osaka, Japan',
        images: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
            'https://images.unsplash.com/photo-1626976990600-70f57309f1a1?w=600',
            'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600'
        ],
        rating: 5,
        reviews_count: 167,
        badge: 'new',
        discount_percent: 27
    },
    {
        id: 14,
        name: 'Zojirushi Rice Cooker',
        name_jp: '象印炊飯器',
        category: 'home',
        description: 'Induction heating, 1L багтаамжтай. Япон технологи, 7 төрлийн будаа чанах горим. Монгол хэл дэмжигдэнэ.',
        price_tugrik: 290000,
        price_yen: 10900,
        old_price: 420000,
        stock: 12,
        condition: 'New',
        location: 'Tokyo, Japan',
        images: [
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600',
            'https://images.unsplash.com/photo-1585515320310-259814833dcf?w=600',
            'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600',
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600'
        ],
        rating: 5,
        reviews_count: 245,
        badge: 'sale',
        discount_percent: 31
    },
    {
        id: 15,
        name: 'PlayStation 5 Digital',
        name_jp: 'プレイステーション5デジタル',
        category: 'hobby',
        description: 'PS5 Digital Edition, Япон хувилбар. 825GB SSD, 2 удирдлагатай. Бүх тоглоом тоглох боломжтой.',
        price_tugrik: 1280000,
        price_yen: 48000,
        old_price: 1650000,
        stock: 3,
        condition: 'New',
        location: 'Tokyo, Japan',
        images: [
            'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600',
            'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=600',
            'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600',
            'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600'
        ],
        rating: 5,
        reviews_count: 312,
        badge: 'hot',
        discount_percent: 22
    },
    {
        id: 16,
        name: 'Gundam Model Kit RG Set',
        name_jp: 'ガンダムモデルキットRGセット',
        category: 'hobby',
        description: 'Real Grade Gundam багц, 3 загвар орно. Япон анимэ коллекшн. Бүх эд анги бүтэн, manual Япон хэл дээр.',
        price_tugrik: 180000,
        price_yen: 6800,
        old_price: 250000,
        stock: 15,
        condition: 'New',
        location: 'Tokyo, Japan',
        images: [
            'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=600',
            'https://images.unsplash.com/photo-1608889825232-b3b864316df9?w=600',
            'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=600',
            'https://images.unsplash.com/photo-1608889825232-b3b864316df9?w=600'
        ],
        rating: 5,
        reviews_count: 189,
        badge: 'new',
        discount_percent: 28
    },
    {
        id: 17,
        name: 'Shiseido Skincare Set',
        name_jp: '資生堂スキンケアセット',
        category: 'beauty',
        description: 'Shiseido Ultimune Power Infusing Concentrate багц. 5 бүтээгдэхүүн орно. Япон гоо сайхны ТОП брэнд.',
        price_tugrik: 420000,
        price_yen: 15800,
        old_price: 580000,
        stock: 10,
        condition: 'New',
        location: 'Tokyo, Japan',
        images: [
            'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600',
            'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600',
            'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600',
            'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600'
        ],
        rating: 5,
        reviews_count: 276,
        badge: 'hot',
        discount_percent: 28
    },
    {
        id: 18,
        name: 'SK-II Facial Treatment',
        name_jp: 'SK-IIフェイシャルトリートメント',
        category: 'beauty',
        description: 'SK-II PITERA Essence 230ml. Япон luxury косметик. Anti-aging, арьс тэжээх. Original баталгаатай.',
        price_tugrik: 680000,
        price_yen: 25600,
        old_price: 890000,
        stock: 6,
        condition: 'New',
        location: 'Osaka, Japan',
        images: [
            'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600',
            'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600',
            'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600',
            'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600'
        ],
        rating: 5,
        reviews_count: 198,
        badge: 'new',
        discount_percent: 24
    },
    {
        id: 2,
        name: 'Uniqlo Down Jacket',
        name_jp: 'ユニクロダウンジャケット',
        category: 'fashion',
        description: 'Uniqlo-н ultra light down jacket. Япон улсаас шууд. Өндөр чанартай, дулаахан, хөнгөн.',
        price_tugrik: 350000,
        price_yen: 12900,
        old_price: 450000,
        stock: 15,
        condition: 'New',
        location: 'Osaka, Japan',
        images: [
            'https://images.unsplash.com/photo-1548126032-079b1c892498?w=600',
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600',
            'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600',
            'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=600'
        ],
        rating: 5,
        reviews_count: 89,
        badge: 'new',
        discount_percent: 22
    },
    {
        id: 3,
        name: 'Toyota Camry Log (2018)',
        name_jp: 'トヨタカムリログ',
        category: 'auto',
        description: 'Toyota Camry 2018 оны log худалдаж авах. Японы auction-оос шууд. Excellent condition, бүх баримт бичиг бүтэн.',
        price_tugrik: 980000,
        price_yen: 45000,
        old_price: 1200000,
        stock: 5,
        condition: 'Good',
        location: 'Nagoya, Japan',
        images: [
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600'
        ],
        rating: 5,
        reviews_count: 45,
        badge: 'sale',
        discount_percent: 18
    },
    {
        id: 4,
        name: 'Sony A7 III Camera',
        name_jp: 'ソニーA7III',
        category: 'electronics',
        description: 'Мэргэжлийн камер, full frame mirrorless. Япон улсын дэлгүүрээс, баталгаатай. Бүх дагалдах хэрэгсэл бүтэн.',
        price_tugrik: 4200000,
        price_yen: 158000,
        old_price: 5500000,
        stock: 2,
        condition: 'Excellent',
        location: 'Tokyo, Japan',
        images: [
            'https://images.unsplash.com/photo-1606980639616-2e86ddfb0f11?w=600',
            'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600',
            'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=600'
        ],
        rating: 5,
        reviews_count: 63,
        badge: 'hot',
        discount_percent: 24
    },
    {
        id: 5,
        name: 'Nintendo Switch OLED',
        name_jp: '任天堂スイッチ有機EL',
        category: 'hobby',
        description: 'Nintendo Switch OLED model, япон хувилбар. Бүх тоглоом тоглох боломжтой. Шинэ, баталгаатай.',
        price_tugrik: 890000,
        price_yen: 32800,
        old_price: 1100000,
        stock: 8,
        condition: 'New',
        location: 'Tokyo, Japan',
        images: [
            'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600',
            'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600',
            'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=600',
            'https://images.unsplash.com/photo-1613944237923-c17acb4e72e5?w=600'
        ],
        rating: 5,
        reviews_count: 156,
        badge: 'new',
        discount_percent: 19
    },
    {
        id: 6,
        name: 'Muji Storage Box Set',
        name_jp: '無印良品収納ボックス',
        category: 'home',
        description: 'Muji-н хадгалах хайрцаг, 5 ширхэг багц. Өндөр чанартай, Japanese minimalism design. Гэртээ эмх цэгцтэй байх.',
        price_tugrik: 125000,
        price_yen: 4800,
        old_price: 180000,
        stock: 20,
        condition: 'New',
        location: 'Fukuoka, Japan',
        images: [
            'https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?w=600',
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600',
            'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600',
            'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600'
        ],
        rating: 5,
        reviews_count: 234,
        badge: 'sale',
        discount_percent: 31
    }
];

// State Management
let cart = JSON.parse(localStorage.getItem('japanCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('japanWishlist')) || [];
let currentFilter = 'all';
let currentUser = JSON.parse(localStorage.getItem('japanUser')) || null;
let userOrders = JSON.parse(localStorage.getItem('japanOrders')) || [];
let uploadedImages = []; // Store uploaded image data URLs

// Admin credentials (In production, this should be server-side!)
const ADMIN_EMAILS = [
    'admin@japanmarket.mn', 
    'bold@email.com',
    'tsewegmidmonhotgon@gmail.com'
];
let isAdmin = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    
    loadProducts();
    updateCartCount();
    updateWishlistCount();
    initializeEventListeners();
    initializeChat();
    updateUserUI();
    initializeAuth();
    initializeDashboard();
    initializePayment();
    initializeSearch();
    initializeReviews();
    checkAdminAccess();
    initializeAdmin();
});

// Event Listeners
function initializeEventListeners() {
    // Filter buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            loadProducts();
        });
    });

    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;
            currentFilter = category;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelector(`[data-filter="${category}"]`).classList.add('active');
            loadProducts();
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Cart button
    document.querySelector('.cart-btn').addEventListener('click', openCartModal);
    
    // Wishlist button
    document.querySelector('.wishlist-nav-btn').addEventListener('click', () => {
        if (wishlist.length === 0) {
            showCustomAlert({
                icon: '❤️',
                title: 'Хүслийн жагсаалт хоосон байна!',
                message: 'Та барааны хажууд байгаа ❤️ дээр дарж хүсэл жагсаалтандаа нэмээрэй.',
                confirmText: 'Бүтээгдэхүүн үзэх',
                cancelText: 'Хаах',
                onConfirm: () => {
                    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
                }
            });
            return;
        }
        currentFilter = 'wishlist';
        loadProducts();
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });

    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', closeModals);
    });

    // Click outside modal to close
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModals();
        }
    });

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            document.querySelector('.search-btn').click();
        }
        if (e.ctrlKey && e.key === 'b') {
            e.preventDefault();
            openCartModal();
        }
        if (e.key === 'Escape') {
            closeModals();
        }
    });
}

// Load Products
function loadProducts() {
    const container = document.getElementById('productsContainer');
    
    let filteredProducts = productsData;
    
    if (currentFilter === 'wishlist') {
        filteredProducts = productsData.filter(p => wishlist.includes(p.id));
    } else if (currentFilter !== 'all') {
        filteredProducts = productsData.filter(p => p.category === currentFilter);
    }
    
    if (filteredProducts.length === 0) {
        container.innerHTML = '<div class="loading">😔 Бараа олдсонгүй</div>';
        return;
    }
    
    container.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
                <span class="product-badge ${product.badge}">${getBadgeText(product.badge)}</span>
                <button class="wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                    ${wishlist.includes(product.id) ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-name-jp">${product.name_jp}</p>
                <div class="product-rating">
                    <span class="stars">${'⭐'.repeat(product.rating)}</span>
                    <span class="review-count">(${product.reviews_count} үнэлгээ)</span>
                </div>
                <div class="product-price">
                    <span class="price-tugrik">₮${product.price_tugrik.toLocaleString()}</span>
                    <span class="price-yen">¥${product.price_yen.toLocaleString()}</span>
                    ${product.discount_percent ? `<span class="discount-percent">-${product.discount_percent}%</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="view-details" onclick="openProductDetail(${product.id})">🔍 Дэлгэрэнгүй</button>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">🛒 Сагс</button>
                    <button class="buy-now-btn" onclick="buyNow(${product.id})">⚡ Худалдаж авах</button>
                </div>
                <button class="write-review-btn" onclick="openReviewModal(${product.id})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    Үнэлгээ өгөх
                </button>
            </div>
        </div>
    `).join('');
}

// Helper Functions
function getBadgeText(badge) {
    const badges = {
        'hot': '🔥 HOT',
        'new': '✨ NEW',
        'sale': '💰 SALE'
    };
    return badges[badge] || '';
}

function getCategoryName(category) {
    const categories = {
        'electronics': '📱 Электроникс',
        'fashion': '👕 Хувцас',
        'auto': '🚗 Авто',
        'home': '🏠 Гэр ахуй',
        'hobby': '🎮 Хобби',
        'beauty': '💄 Гоо сайхан'
    };
    return categories[category] || category;
}

// Wishlist Functions
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('❌ Хүслийн жагсаалтаас хассан');
    } else {
        wishlist.push(productId);
        showNotification('❤️ Хүслийн жагсаалтад нэмсэн');
    }
    
    localStorage.setItem('japanWishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    loadProducts();
}

function updateWishlistCount() {
    document.querySelector('.wishlist-count').textContent = wishlist.length;
}

// Cart Functions
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            name_jp: product.name_jp,
            price_tugrik: product.price_tugrik,
            price_yen: product.price_yen,
            image: product.images[0],
            quantity: 1
        });
    }
    
    localStorage.setItem('japanCart', JSON.stringify(cart));
    updateCartCount();
    showNotification('🛒 Сагсанд нэмсэн!');
}

function buyNow(productId) {
    // Clear cart first
    cart = [];
    
    // Add this product to cart
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    cart.push({
        id: product.id,
        name: product.name,
        name_jp: product.name_jp,
        price_tugrik: product.price_tugrik,
        price_yen: product.price_yen,
        image: product.images[0],
        quantity: 1
    });
    
    localStorage.setItem('japanCart', JSON.stringify(cart));
    updateCartCount();
    
    // Open payment modal directly
    showToast('success', '⚡ Хурдан худалдан авалт...');
    setTimeout(() => {
        openPaymentModal();
    }, 500);
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

// Global cart variables
let appliedPromo = null;
let deliveryMethod = 'standard';
let deliveryCost = 50000;
let selectedCurrency = 'MNT';
let selectedAddressIndex = 0;
let savedAddresses = [
    { name: '🏠 Гэрийн хаяг', city: 'УБ', district: 'СБД', address: '3-р хороо, 15-р байр, 45 тоот', phone: '+976 9999-9999', isDefault: true },
    { name: '💼 Ажлын хаяг', city: 'УБ', district: 'ЧД', address: 'Энхтайваны өргөн чөлөө, 14-р байр', phone: '+976 8888-8888', isDefault: false }
];

const currencyRates = {
    'MNT': 1,
    'JPY': 0.05,
    'USD': 0.00029,
    'KRW': 0.39
};

const currencySymbols = {
    'MNT': '₮',
    'JPY': '¥',
    'USD': '$',
    'KRW': '₩'
};

function openCartModal() {
    console.log('Cart Modal Opening...', cart);
    const modal = document.getElementById('cartModal');
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (!modal) {
        console.error('Cart modal element not found!');
        return;
    }
    
    if (!cartItemsContainer) {
        console.error('Cart items container not found!');
        return;
    }
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Таны сагс хоосон байна</p>';
        document.getElementById('promoSection').style.display = 'none';
        document.getElementById('deliverySection').style.display = 'none';
        document.getElementById('addressSection').style.display = 'none';
        document.getElementById('notesSection').style.display = 'none';
        document.getElementById('currencySection').style.display = 'none';
        document.getElementById('cartSummarySection').style.display = 'none';
        document.getElementById('cartActions').style.display = 'none';
        document.getElementById('cartRecommendations').style.display = 'none';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => {
            const product = productsData.find(p => p.id === item.id);
            const stockWarning = product && product.stock < 5 ? 'low' : '';
            const stockText = product ? 'Үлдэгдэл: ' + product.stock + ' ширхэг' : '';
            
            return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onclick="openQuickView(${item.id})" style="cursor: pointer;" title="Дэлгэрэнгүй харах">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₮${item.price_tugrik.toLocaleString()}</div>
                    <div class="cart-item-stock ${stockWarning}">${stockText}</div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)" ${product && item.quantity >= product.stock ? 'disabled' : ''}>+</button>
                    </div>
                    <button class="remove-item-btn" onclick="confirmRemoveItem(${item.id})" title="Устгах">🗑️</button>
                </div>
            </div>
        `}).join('');
        
        document.getElementById('promoSection').style.display = 'block';
        document.getElementById('deliverySection').style.display = 'block';
        document.getElementById('addressSection').style.display = 'block';
        document.getElementById('notesSection').style.display = 'block';
        document.getElementById('currencySection').style.display = 'block';
        document.getElementById('cartSummarySection').style.display = 'block';
        document.getElementById('cartActions').style.display = 'flex';
        
        // Load recommendations
        loadCartRecommendations();
        loadSavedAddresses();
    }
    
    updateCartSummary();
    console.log('Setting modal display to flex');
    modal.style.display = 'flex';
    console.log('Modal opened successfully!');
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    const product = productsData.find(p => p.id === productId);
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    
    // Check stock limit
    if (product && newQuantity > product.stock) {
        showToast('warning', 'Үлдэгдэл хүрэлцэхгүй байна! (Үлдэгдэл: ' + product.stock + ')');
        return;
    }
    
    if (newQuantity <= 0) {
        confirmRemoveItem(productId);
        return;
    }
    
    item.quantity = newQuantity;
    localStorage.setItem('japanCart', JSON.stringify(cart));
    openCartModal();
    updateCartCount();
}

function confirmRemoveItem(productId) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    
    showCustomAlert({
        icon: '🗑️',
        title: 'Бараа устгах уу?',
        message: `"${item.name}" барааг сагснаасаа устгах уу?`,
        confirmText: 'Тийм, устгах',
        cancelText: 'Үгүй',
        onConfirm: () => {
            removeFromCart(productId);
        }
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('japanCart', JSON.stringify(cart));
    openCartModal();
    updateCartCount();
    showToast('info', '🗑️ Бараа устгагдлаа');
}

function clearCart() {
    if (cart.length === 0) return;
    
    showCustomAlert({
        icon: '🗑️',
        title: 'Сагс цэвэрлэх үү?',
        message: 'Сагсны бүх бараа устгах уу? Энэ үйлдлийг буцаах боломжгүй.',
        confirmText: 'Тийм, бүгдийг устгах',
        cancelText: 'Үгүй',
        onConfirm: () => {
            cart = [];
            appliedPromo = null;
            localStorage.setItem('japanCart', JSON.stringify(cart));
            openCartModal();
            updateCartCount();
            showToast('success', '✅ Сагс хоослогдлоо');
        }
    });
}

// Promo Code System
const promoCodes = {
    'SALE20': { discount: 20, description: '20% хөнгөлөлт' },
    'NEWUSER': { discount: 15, description: 'Шинэ хэрэглэгчийн 15% хөнгөлөлт' },
    'FREESHIP': { discount: 0, freeShipping: true, description: 'Үнэгүй хүргэлт' },
    'SUMMER30': { discount: 30, description: 'Зуны 30% хөнгөлөлт' }
};

function applyPromo(code) {
    document.getElementById('promoCode').value = code;
    applyPromoCode();
}

function applyPromoCode() {
    const code = document.getElementById('promoCode').value.toUpperCase().trim();
    const messageEl = document.getElementById('promoMessage');
    
    if (!code) {
        messageEl.className = 'promo-message error';
        messageEl.textContent = '❌ Код оруулна уу!';
        return;
    }
    
    if (promoCodes[code]) {
        appliedPromo = { code: code, discount: promoCodes[code].discount, description: promoCodes[code].description, freeShipping: promoCodes[code].freeShipping };
        messageEl.className = 'promo-message success';
        messageEl.textContent = '✅ "' + code + '" код амжилттай батлагдлаа! ' + promoCodes[code].description;
        updateCartSummary();
        showToast('success', '🎉 ' + promoCodes[code].description + ' хөнгөлөлт идэвхжлээ!');
    } else {
        messageEl.className = 'promo-message error';
        messageEl.textContent = '❌ Буруу код байна!';
        appliedPromo = null;
        updateCartSummary();
    }
}

// Delivery Method
function updateDelivery() {
    const selected = document.querySelector('input[name="delivery"]:checked').value;
    deliveryMethod = selected;
    
    switch(selected) {
        case 'standard':
            deliveryCost = 50000;
            break;
        case 'express':
            deliveryCost = 100000;
            break;
        case 'pickup':
            deliveryCost = 0;
            break;
    }
    
    updateCartSummary();
}

// Enhanced Cart Summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price_tugrik * item.quantity), 0);
    
    // Calculate discount
    let discount = 0;
    let discountPercent = 0;
    if (appliedPromo && appliedPromo.discount > 0) {
        discountPercent = appliedPromo.discount;
        discount = Math.round(subtotal * (discountPercent / 100));
    }
    
    // Calculate shipping
    let shipping = cart.length > 0 ? deliveryCost : 0;
    if (appliedPromo && appliedPromo.freeShipping) {
        shipping = 0;
    }
    
    // Calculate total
    const total = subtotal - discount + shipping;
    const totalYen = Math.round(total / 20); // Approximate conversion
    
    // Update displays
    document.getElementById('subtotal').textContent = '₮' + subtotal.toLocaleString();
    document.getElementById('shipping').textContent = shipping === 0 ? 'Үнэгүй' : '₮' + shipping.toLocaleString();
    document.getElementById('totalPrice').textContent = '₮' + total.toLocaleString();
    document.getElementById('totalYen').textContent = '¥' + totalYen.toLocaleString();
    
    // Show/hide discount row
    const discountRow = document.getElementById('discountRow');
    if (discount > 0) {
        discountRow.style.display = 'flex';
        document.getElementById('discountPercent').textContent = discountPercent + '%';
        document.getElementById('discountAmount').textContent = '-₮' + discount.toLocaleString();
    } else {
        discountRow.style.display = 'none';
    }
}

// Load Recommendations
function loadCartRecommendations() {
    const recommendationsSection = document.getElementById('cartRecommendations');
    const grid = document.getElementById('recommendationsGrid');
    
    // Get cart categories
    const cartCategories = [...new Set(cart.map(item => {
        const product = productsData.find(p => p.id === item.id);
        return product ? product.category : null;
    }).filter(Boolean))];
    
    // Find related products not in cart
    const recommendations = productsData
        .filter(p => !cart.find(c => c.id === p.id))
        .filter(p => cartCategories.includes(p.category))
        .slice(0, 4);
    
    if (recommendations.length > 0) {
        recommendationsSection.style.display = 'block';
        grid.innerHTML = recommendations.map(product => `
            <div class="recommendation-item" onclick="openProductDetail(${product.id})">
                <img src="${product.images[0]}" alt="${product.name}">
                <h4>${product.name}</h4>
                <div class="price">₮${product.price_tugrik.toLocaleString()}</div>
            </div>
        `).join('');
    } else {
        recommendationsSection.style.display = 'none';
    }
}

// Product Detail Modal
function openProductDetail(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalStars').textContent = '⭐'.repeat(product.rating);
    document.getElementById('modalReviews').textContent = '(' + product.reviews_count + ' үнэлгээ)';
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalOldPrice').textContent = '₮' + product.old_price.toLocaleString();
    document.getElementById('modalCurrentPrice').textContent = '₮' + product.price_tugrik.toLocaleString();
    
    // Set images
    document.getElementById('mainImage').src = product.images[0];
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.src = product.images[index] || product.images[0];
        thumb.onclick = () => {
            changeMainImageWithAnimation(product.images[index]);
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        };
    });
    
    // Set button actions
    document.querySelector('.add-to-cart-modal').onclick = () => {
        addToCart(productId);
        closeModals();
    };
    
    document.querySelector('.buy-now').onclick = () => {
        addToCart(productId);
        closeModals();
        setTimeout(openCartModal, 300);
    };
    
    // Load product reviews
    loadProductReviews(productId);
    
    modal.style.display = 'flex';
}

// Change main image with smooth animation
function changeMainImageWithAnimation(newImageSrc) {
    const mainImage = document.getElementById('mainImage');
    
    // Add fade-out class
    mainImage.classList.add('fade-out');
    
    // Wait for fade-out animation, then change image
    setTimeout(() => {
        mainImage.src = newImageSrc;
        mainImage.classList.remove('fade-out');
        mainImage.classList.add('fade-in');
        
        // Remove fade-in class after animation completes
        setTimeout(() => {
            mainImage.classList.remove('fade-in');
        }, 400);
    }, 200);
}

// Modal Functions
function closeModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

// Chat Functions
function initializeChat() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWidget = document.getElementById('chatWidget');
    const closeChat = document.getElementById('closeChat');
    const sendChat = document.getElementById('sendChat');
    const chatInput = document.getElementById('chatInput');
    
    chatToggle.addEventListener('click', () => {
        chatWidget.style.display = 'flex';
        chatToggle.style.display = 'none';
    });
    
    closeChat.addEventListener('click', () => {
        chatWidget.style.display = 'none';
        chatToggle.style.display = 'block';
    });
    
    sendChat.addEventListener('click', () => sendMessage());
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    const chatBody = document.getElementById('chatBody');
    
    // Add user message
    chatBody.innerHTML += `
        <div class="chat-message user">
            <p>${message}</p>
        </div>
    `;
    
    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        chatBody.innerHTML += `
            <div class="chat-message bot">
                <p>${response}</p>
            </div>
        `;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

function getBotResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('үнэ') || msg.includes('хэд')) {
        return '💰 Манай барааны үнэ маш хямд! iPhone 13 Pro Max ₮2,450,000, Uniqlo хувцас ₮350,000. Бүх барааны үнийг вэб дээр харна уу!';
    } else if (msg.includes('хүргэлт') || msg.includes('хэзээ')) {
        return '📦 Хүргэлт 7-14 хоногт хийгдэнэ. Хүргэлтийн зардал ₮50,000. Бүх бараа найдвартай хүрнэ!';
    } else if (msg.includes('баталгаа') || msg.includes('буцаалт')) {
        return '✓ Бүх бараа 100% баталгаатай! 3 сарын баталгаа өгнө. Асуудал гарвал 7 хоногийн дотор буцаах боломжтой!';
    } else if (msg.includes('утас') || msg.includes('холбогдох')) {
        return '📞 Холбоо барих: +976 9999-9999 эсвэл info@japanmarket.mn. Бид 24/7 бэлэн байна!';
    } else if (msg.includes('төлбөр') || msg.includes('дансанд')) {
        return '💳 Дансанд шилжүүлэх, бэлэн мөнгө, картаар төлөх боломжтой. Найдвартай төлбөрийн систем!';
    } else if (msg.includes('байгаа') || msg.includes('stock')) {
        return '📦 iPhone 13 Pro Max - 3 ширхэг, Uniqlo Jacket - 15 ширхэг, бусад бараа байгаа. Дэлгэрэнгүй бараа бүрээс харна уу!';
    } else {
        return '👋 Сайн байна уу! Танд туслахад бэлэн байна. Үнэ, хүргэлт, баталгаа, холбоо барих талаар асуугаарай!';
    }
}

// Contact Form
function handleContactSubmit(e) {
    e.preventDefault();
    showNotification('📧 Таны мессеж илгээгдлээ! Удахгүй хариулах болно.');
    e.target.reset();
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, #ff4757, #d63031);
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Checkout Function
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkout-btn')) {
        if (cart.length === 0) {
            showNotification('🛒 Сагс хоосон байна!');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price_tugrik * item.quantity), 0) + 50000;
        const orderNumber = 'JM' + Date.now();
        
        showNotification('✅ Захиалга амжилттай! Захиалгын дугаар: ' + orderNumber);
        
        // Clear cart
        cart = [];
        localStorage.setItem('japanCart', JSON.stringify(cart));
        updateCartCount();
        closeModals();
        
        // Send order to backend (future implementation)
        console.log('Order created:', {
            orderNumber,
            items: cart,
            total,
            timestamp: new Date().toISOString()
        });
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Animation Styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// API Integration (Ready for backend)
const API_BASE_URL = 'http://localhost:5000/api';

async function fetchProductsFromAPI() {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using local data, API not available:', error);
        return productsData;
    }
}

async function createOrder(orderData) {
    try {
        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });
        return await response.json();
    } catch (error) {
        console.error('Order creation failed:', error);
        throw error;
    }
}

async function addReview(productId, rating, comment) {
    try {
        const response = await fetch(`${API_BASE_URL}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_id: productId,
                user_id: 1, // Replace with actual user ID
                rating,
                comment
            })
        });
        return await response.json();
    } catch (error) {
        console.error('Review submission failed:', error);
        throw error;
    }
}

// Console welcome message
console.log('%c🇯🇵 JAPAN MARKET', 'color: #ff4757; font-size: 24px; font-weight: bold;');
console.log('%cFull-stack e-commerce platform for Japanese secondhand goods', 'color: #2f3542; font-size: 14px;');
console.log('%cBackend API ready at: http://localhost:5000/api', 'color: #00b894; font-size: 12px;');

// ============================================
// AUTH SYSTEM
// ============================================

function initializeAuth() {
    // Auth tab switching
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            
            const tabName = e.target.dataset.tab;
            document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
            document.getElementById(tabName + 'Form').classList.add('active');
        });
    });
}

function openAuthModal() {
    if (currentUser) {
        // Redirect to profile page if logged in
        window.location.href = 'profile.html';
    } else {
        // Redirect to login page
        window.location.href = 'login.html';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    
    // Simulate login
    currentUser = {
        id: 1,
        name: 'Болд Б.',
        email: email,
        phone: '+976 9999-9999',
        address: 'УБ, СБД'
    };
    
    localStorage.setItem('japanUser', JSON.stringify(currentUser));
    updateUserUI();
    closeModals();
    showToast('success', '✅ Амжилттай нэвтэрлээ!');
}

function handleRegister(e) {
    e.preventDefault();
    const name = e.target.querySelectorAll('input')[0].value;
    const email = e.target.querySelectorAll('input')[1].value;
    const phone = e.target.querySelectorAll('input')[2].value;
    
    currentUser = {
        id: Date.now(),
        name: name,
        email: email,
        phone: phone,
        address: ''
    };
    
    localStorage.setItem('japanUser', JSON.stringify(currentUser));
    updateUserUI();
    closeModals();
    showToast('success', '🎉 Бүртгэл амжилттай!');
}

function updateUserUI() {
    const userLabel = document.getElementById('userLabel');
    if (currentUser) {
        userLabel.textContent = currentUser.name.split(' ')[0];
        userLabel.title = currentUser.name;
        
        // Update currentUser in localStorage for profile page
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
        userLabel.textContent = 'Нэвтрэх';
    }
}

// PHONE AUTHENTICATION
// ============================================

let phoneVerificationCode = '';
let phoneVerificationTimer = null;
let phoneNumberToVerify = '';

function switchLoginMethod(method) {
    // Update button states
    document.querySelectorAll('.method-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.method === method) {
            btn.classList.add('active');
        }
    });
    
    // Switch forms
    document.querySelectorAll('.login-form-method').forEach(form => {
        form.classList.remove('active');
    });
    
    if (method === 'email') {
        document.getElementById('emailLoginForm').classList.add('active');
    } else if (method === 'phone') {
        document.getElementById('phoneLoginForm').classList.add('active');
        resetPhoneLogin();
    }
}

function sendPhoneCode(e) {
    e.preventDefault();
    
    const countryCode = document.querySelector('.country-code').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    phoneNumberToVerify = countryCode + phoneNumber;
    
    // Generate random 6-digit code
    phoneVerificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // In production, send SMS via API
    console.log('Verification Code:', phoneVerificationCode);
    
    // Show step 2
    document.getElementById('phoneStep1').style.display = 'none';
    document.getElementById('phoneStep2').style.display = 'block';
    document.getElementById('sentPhoneNumber').textContent = phoneNumberToVerify;
    
    // Start timer
    startResendTimer();
    
    // Focus first code input
    document.querySelector('.code-digit').focus();
    
    showToast('success', `📱 Код илгээгдлээ: ${phoneVerificationCode}`);
}

function startResendTimer() {
    let seconds = 60;
    const timerElement = document.getElementById('timerSeconds');
    const resendBtn = document.getElementById('resendCodeBtn');
    
    resendBtn.disabled = true;
    
    phoneVerificationTimer = setInterval(() => {
        seconds--;
        timerElement.textContent = seconds;
        
        if (seconds <= 0) {
            clearInterval(phoneVerificationTimer);
            resendBtn.disabled = false;
            document.getElementById('codeTimer').style.display = 'none';
        }
    }, 1000);
}

function resendPhoneCode() {
    // Generate new code
    phoneVerificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('New Verification Code:', phoneVerificationCode);
    
    // Reset inputs
    document.querySelectorAll('.code-digit').forEach(input => {
        input.value = '';
        input.classList.remove('filled');
    });
    document.querySelector('.code-digit').focus();
    
    // Restart timer
    document.getElementById('codeTimer').style.display = 'block';
    startResendTimer();
    
    showToast('success', `📱 Шинэ код илгээгдлээ: ${phoneVerificationCode}`);
}

function verifyPhoneCode() {
    const inputs = document.querySelectorAll('.code-digit');
    const enteredCode = Array.from(inputs).map(input => input.value).join('');
    
    if (enteredCode.length !== 6) {
        showToast('error', '❌ 6 оронтой код оруулна уу!');
        return;
    }
    
    if (enteredCode === phoneVerificationCode) {
        // Login successful
        currentUser = {
            id: Date.now(),
            name: 'Утасны хэрэглэгч',
            email: '',
            phone: phoneNumberToVerify,
            address: '',
            loginMethod: 'phone'
        };
        
        localStorage.setItem('japanUser', JSON.stringify(currentUser));
        updateUserUI();
        closeModals();
        
        clearInterval(phoneVerificationTimer);
        showToast('success', '✅ Амжилттай нэвтэрлээ!');
        
        // Reset phone login
        resetPhoneLogin();
    } else {
        showToast('error', '❌ Код буруу байна! Дахин оролдоно уу.');
        
        // Shake animation
        const codeInputs = document.querySelector('.verification-code-input');
        codeInputs.style.animation = 'shake 0.5s';
        setTimeout(() => {
            codeInputs.style.animation = '';
            inputs.forEach(input => {
                input.value = '';
                input.classList.remove('filled');
            });
            inputs[0].focus();
        }, 500);
    }
}

function backToPhoneStep1() {
    document.getElementById('phoneStep2').style.display = 'none';
    document.getElementById('phoneStep1').style.display = 'block';
    
    // Clear timer
    if (phoneVerificationTimer) {
        clearInterval(phoneVerificationTimer);
    }
    
    // Reset inputs
    document.querySelectorAll('.code-digit').forEach(input => {
        input.value = '';
        input.classList.remove('filled');
    });
    document.getElementById('phoneNumber').value = '';
}

function resetPhoneLogin() {
    document.getElementById('phoneStep1').style.display = 'block';
    document.getElementById('phoneStep2').style.display = 'none';
    document.getElementById('phoneNumber').value = '';
    
    if (phoneVerificationTimer) {
        clearInterval(phoneVerificationTimer);
    }
    
    document.querySelectorAll('.code-digit').forEach(input => {
        input.value = '';
        input.classList.remove('filled');
    });
}

// Code digit input handlers
document.addEventListener('DOMContentLoaded', function() {
    const codeInputs = document.querySelectorAll('.code-digit');
    
    codeInputs.forEach((input, index) => {
        // Auto-focus next input
        input.addEventListener('input', function(e) {
            const value = e.target.value;
            
            if (value.length === 1) {
                e.target.classList.add('filled');
                
                // Move to next input
                if (index < codeInputs.length - 1) {
                    codeInputs[index + 1].focus();
                }
                
                // Auto-verify when all filled
                const allFilled = Array.from(codeInputs).every(inp => inp.value.length === 1);
                if (allFilled) {
                    setTimeout(() => verifyPhoneCode(), 300);
                }
            } else {
                e.target.classList.remove('filled');
            }
        });
        
        // Handle backspace
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                codeInputs[index - 1].focus();
                codeInputs[index - 1].value = '';
                codeInputs[index - 1].classList.remove('filled');
            }
        });
        
        // Only allow numbers
        input.addEventListener('keypress', function(e) {
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
            }
        });
        
        // Handle paste
        input.addEventListener('paste', function(e) {
            e.preventDefault();
            const pastedData = e.clipboardData.getData('text').slice(0, 6);
            
            if (/^\d{6}$/.test(pastedData)) {
                pastedData.split('').forEach((digit, i) => {
                    if (codeInputs[i]) {
                        codeInputs[i].value = digit;
                        codeInputs[i].classList.add('filled');
                    }
                });
                
                setTimeout(() => verifyPhoneCode(), 300);
            }
        });
    });
});

function logout() {
    showCustomAlert({
        icon: '👋',
        title: 'Гарах уу?',
        message: 'Та системээс гарахдаа итгэлтэй байна уу?',
        confirmText: 'Тийм, гарах',
        cancelText: 'Үгүй',
        onConfirm: () => {
            currentUser = null;
            localStorage.removeItem('japanUser');
            updateUserUI();
            closeModals();
            showToast('success', '👋 Амжилттай гарлаа!');
        }
    });
}

// ============================================
// DASHBOARD
// ============================================

function initializeDashboard() {
    document.querySelectorAll('.dash-nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.classList.contains('logout')) {
                logout();
                return;
            }
            
            // Handle profile navigation
            const section = e.target.dataset.section;
            if (section === 'profile') {
                window.location.href = 'profile.html';
                return;
            }
            
            document.querySelectorAll('.dash-nav-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            document.querySelectorAll('.dashboard-section').forEach(s => s.classList.remove('active'));
            document.getElementById(section + 'Section').classList.add('active');
            
            if (section === 'orders') loadOrders();
            if (section === 'wishlist') loadWishlistDashboard();
        });
    });
}

function openDashboard() {
    if (!currentUser) {
        openAuthModal();
        return;
    }
    
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userEmail').textContent = currentUser.email;
    loadOrders();
    loadProfileInfo();
    document.getElementById('dashboardModal').style.display = 'block';
}

function loadProfileInfo() {
    if (!currentUser) return;
    
    // Update profile photo and quick info
    if (currentUser.photoUrl) {
        document.getElementById('profilePhoto').src = currentUser.photoUrl;
    }
    document.getElementById('profileName').textContent = currentUser.name || '';
    document.getElementById('profileEmail').textContent = currentUser.email || '';
    
    // Fill form fields
    const form = document.querySelector('.profile-form');
    if (form) {
        form.fullName.value = currentUser.name || '';
        form.phone.value = currentUser.phone || '';
        form.email.value = currentUser.email || '';
        form.birthdate.value = currentUser.birthdate || '';
        form.city.value = currentUser.city || 'Улаанбаатар';
        form.district.value = currentUser.district || 'БГД';
        form.address.value = currentUser.address || '';
        form.address2.value = currentUser.address2 || '';
        
        // Check interest tags
        if (currentUser.interests) {
            currentUser.interests.forEach(interest => {
                const checkbox = form.querySelector(`input[name="interest"][value="${interest}"]`);
                if (checkbox) checkbox.checked = true;
            });
        }
    }
}

function loadOrders() {
    const container = document.getElementById('ordersList');
    
    if (userOrders.length === 0) {
        container.innerHTML = '<p class="empty-cart">Захиалга байхгүй байна</p>';
        return;
    }
    
    container.innerHTML = userOrders.map(order => `
        <div class="order-card">
            <div class="order-header">
                <div>
                    <h4>Захиалга #${order.orderNumber}</h4>
                    <p>${order.date}</p>
                </div>
                <span class="order-status ${order.status}">${getOrderStatusText(order.status)}</span>
            </div>
            <div class="order-items">
                <p><strong>Бараа:</strong> ${order.items.length} ширхэг</p>
                <p><strong>Нийт:</strong> ₮${order.total.toLocaleString()}</p>
            </div>
        </div>
    `).join('');
}

function getOrderStatusText(status) {
    const statuses = {
        'pending': '⏳ Хүлээгдэж байна',
        'shipped': '📦 Илгээсэн',
        'delivered': '✅ Хүргэсэн'
    };
    return statuses[status] || status;
}

function loadWishlistDashboard() {
    const container = document.getElementById('wishlistGrid');
    const wishlistProducts = productsData.filter(p => wishlist.includes(p.id));
    
    if (wishlistProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-wishlist-state">
                <div class="empty-wishlist-animation">
                    <svg class="wishlist-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <div class="heart-particles">
                        <span class="particle">💜</span>
                        <span class="particle">💙</span>
                        <span class="particle">💚</span>
                        <span class="particle">🧡</span>
                        <span class="particle">❤️</span>
                    </div>
                </div>
                <h2 class="empty-wishlist-title">Хүслийн жагсаалт хоосон байна</h2>
                <p class="empty-wishlist-description">
                    Та одоогоор ямар ч бараанд дуртай гэж тэмдэглээгүй байна.<br>
                    Барааны хажууд байгаа ❤️ дээр дарж хүсэл жагсаалтандаа нэмээрэй!
                </p>
                <div class="empty-wishlist-features">
                    <div class="feature-item">
                        <div class="feature-icon">💝</div>
                        <div class="feature-text">
                            <h4>Хадгалах</h4>
                            <p>Таалагдсан бараагаа хадгална</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🔔</div>
                        <div class="feature-text">
                            <h4>Мэдэгдэл</h4>
                            <p>Үнэ буурвал мэдэгдэнэ</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🎁</div>
                        <div class="feature-text">
                            <h4>Хуваалцах</h4>
                            <p>Найз нөхөдтэйгээ хуваалцана</p>
                        </div>
                    </div>
                </div>
                <div class="empty-wishlist-actions">
                    <button class="btn-explore-products" onclick="closeAllModals(); scrollToProducts();">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                        Бүтээгдэхүүн үзэх
                    </button>
                    <button class="btn-popular-items" onclick="showPopularProducts();">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        Алдартай бараа
                    </button>
                </div>
                <div class="empty-wishlist-tips">
                    <p class="tip-title">💡 Зөвлөмж:</p>
                    <ul class="tip-list">
                        <li>✨ Барааны картан дээрх ❤️ дээр дарж хүсэл жагсаалтандаа нэмнэ үү</li>
                        <li>🔖 Таалагдсан бараагаа бүгдийг нэг газар хадгалаарай</li>
                        <li>💰 Үнийн хөнгөлөлт эхлэхэд шууд мэдэгдэл авна</li>
                    </ul>
                </div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = wishlistProducts.map(product => `
        <div class="product-card">
            <img src="${product.images[0]}" alt="${product.name}" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
            <h4>${product.name}</h4>
            <p class="price-tugrik">₮${product.price_tugrik.toLocaleString()}</p>
            <button class="btn-primary" onclick="addToCart(${product.id})">🛒 Сагсанд нэмэх</button>
        </div>
    `).join('');
}

// Helper functions for empty wishlist
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
}

function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showPopularProducts() {
    closeAllModals();
    // Filter popular products (rating >= 4)
    const popularProducts = productsData.filter(p => p.rating >= 4);
    
    // Show in main products grid
    const container = document.getElementById('productsContainer');
    container.innerHTML = popularProducts.slice(0, 12).map(product => {
        const inWishlist = wishlist.includes(product.id);
        return `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    <span class="badge">${product.discount}% OFF</span>
                    <button class="wishlist-btn ${inWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                        ${inWishlist ? '❤️' : '🤍'}
                    </button>
                    <img src="${product.images[0]}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-name-jp">${product.name_jp}</p>
                    <div class="product-rating">
                        <span class="stars">${'⭐'.repeat(product.rating)}</span>
                        <span class="reviews">(${product.reviews_count})</span>
                    </div>
                    <div class="product-price">
                        <span class="old-price">¥${product.price_yen.toLocaleString()}</span>
                        <span class="price-tugrik">₮${product.price_tugrik.toLocaleString()}</span>
                    </div>
                    <div class="product-actions">
                        <button class="view-details" onclick="openProductDetail(${product.id})">🔍 Дэлгэрэнгүй</button>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">🛒 Сагс</button>
                        <button class="buy-now-btn" onclick="buyNow(${product.id})">⚡ Худалдаж авах</button>
                    </div>
                    <button class="write-review-btn" onclick="openReviewModal(${product.id})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        Үнэлгээ өгөх
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    scrollToProducts();
    showToast('success', '⭐ Алдартай бараанууд харуулж байна!');
}

// ============================================
// PAYMENT SYSTEM
// ============================================

let paymentData = {
    subtotal: 0,
    discount: 0,
    shipping: 0,
    total: 0,
    selectedMethod: 'card'
};

function openPaymentModal() {
    const cart = getCart();
    if (cart.length === 0) {
        showToast('error', '⚠️ Сагс хоосон байна!');
        return;
    }
    
    // Calculate totals
    paymentData.subtotal = cart.reduce((sum, item) => sum + (item.price_tugrik * item.quantity), 0);
    paymentData.discount = appliedPromo ? Math.round(paymentData.subtotal * (appliedPromo.discount / 100)) : 0;
    paymentData.shipping = deliveryCost;
    paymentData.total = paymentData.subtotal - paymentData.discount + paymentData.shipping;
    
    // Update summary
    document.getElementById('paymentSubtotal').textContent = '₮' + paymentData.subtotal.toLocaleString();
    document.getElementById('paymentDiscount').textContent = '-₮' + paymentData.discount.toLocaleString();
    document.getElementById('paymentShipping').textContent = '₮' + paymentData.shipping.toLocaleString();
    document.getElementById('paymentTotal').textContent = '₮' + paymentData.total.toLocaleString();
    document.getElementById('payBtnAmount').textContent = '₮' + paymentData.total.toLocaleString();
    
    // Show/hide discount row
    document.getElementById('paymentDiscountRow').style.display = paymentData.discount > 0 ? 'flex' : 'none';
    
    // Show payment form for card (default)
    showPaymentForm('card');
    
    // Add event listeners for payment method change
    document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            paymentData.selectedMethod = e.target.value;
            showPaymentForm(e.target.value);
        });
    });
    
    document.getElementById('paymentModal').style.display = 'flex';
}

function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

function showPaymentForm(method) {
    const container = document.getElementById('paymentFormContainer');
    
    switch(method) {
        case 'card':
            container.innerHTML = `
                <div class="payment-form">
                    <h4>💳 Картын мэдээлэл</h4>
                    <div class="form-group">
                        <label>Картын дугаар</label>
                        <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Дуусах хугацаа</label>
                            <input type="text" id="cardExpiry" placeholder="MM/YY" maxlength="5">
                        </div>
                        <div class="form-group">
                            <label>CVV</label>
                            <input type="text" id="cardCVV" placeholder="123" maxlength="3">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Эзэмшигчийн нэр</label>
                        <input type="text" id="cardName" placeholder="JOHN DOE">
                    </div>
                    <p style="color:#666; font-size:0.9rem; margin-top:1rem;">
                        🔒 Таны картын мэдээлэл найдвартай хамгаалагдсан
                    </p>
                </div>
            `;
            
            // Add input formatting
            document.getElementById('cardNumber')?.addEventListener('input', formatCardNumber);
            document.getElementById('cardExpiry')?.addEventListener('input', formatExpiry);
            document.getElementById('cardCVV')?.addEventListener('input', formatCVV);
            break;
            
        case 'qpay':
            container.innerHTML = `
                <div class="payment-form">
                    <h4>📱 QPay QR код</h4>
                    <div class="qr-code-container">
                        <div class="qr-code-placeholder">
                            📲
                        </div>
                        <p style="color:#666; margin-bottom:0.5rem;">QPay апп ашиглан QR код уншуулна уу</p>
                        <p style="color:var(--primary-color); font-weight:600; font-size:1.2rem;">
                            ₮${paymentData.total.toLocaleString()}
                        </p>
                    </div>
                    <p style="text-align:center; color:#999; font-size:0.9rem;">
                        Төлбөр төлсний дараа автоматаар баталгаажна
                    </p>
                </div>
            `;
            break;
            
        case 'bank':
            container.innerHTML = `
                <div class="payment-form">
                    <h4>🏦 Шилжүүлэг хийх</h4>
                    <div class="bank-details">
                        <div class="bank-detail-row">
                            <strong>Банк:</strong>
                            <span>Хаан Банк</span>
                        </div>
                        <div class="bank-detail-row">
                            <strong>Данс:</strong>
                            <span>5021234567</span>
                        </div>
                        <div class="bank-detail-row">
                            <strong>Эзэмшигч:</strong>
                            <span>Japan Market LLC</span>
                        </div>
                        <div class="bank-detail-row">
                            <strong>Утга:</strong>
                            <span id="transferRef">JM${Date.now().toString().slice(-6)}</span>
                        </div>
                        <div class="bank-detail-row">
                            <strong>Дүн:</strong>
                            <span style="color:var(--primary-color); font-size:1.2rem;">₮${paymentData.total.toLocaleString()}</span>
                        </div>
                        <button class="copy-btn" onclick="copyBankInfo()">📋 Хуулах</button>
                    </div>
                    <p style="text-align:center; color:#666; font-size:0.9rem; margin-top:1rem;">
                        Шилжүүлэг хийсний дараа "Төлбөр төлөх" дарна уу
                    </p>
                </div>
            `;
            break;
            
        case 'cash':
            container.innerHTML = `
                <div class="payment-form">
                    <h4>💵 Бэлнээр төлөх</h4>
                    <div style="text-align:center; padding:2rem;">
                        <div style="font-size:5rem; margin-bottom:1rem;">💰</div>
                        <p style="font-size:1.1rem; color:#666; margin-bottom:0.5rem;">
                            Хүргэлтийн үед бэлнээр төлнө
                        </p>
                        <p style="font-size:1.5rem; font-weight:700; color:var(--primary-color);">
                            ₮${paymentData.total.toLocaleString()}
                        </p>
                        <p style="color:#999; font-size:0.9rem; margin-top:1rem;">
                            ⚠️ Жижиг мөнгө бэлдээрэй
                        </p>
                    </div>
                </div>
            `;
            break;
            
        case 'social':
            container.innerHTML = `
                <div class="payment-form">
                    <h4>🌐 Social Pay</h4>
                    <p style="color:#666; margin-bottom:1rem;">Төлбөрийн хэрэгсэл сонгох:</p>
                    <div class="social-pay-options">
                        <button class="social-pay-btn lendmn" onclick="selectSocialPay('lendmn')">
                            <div style="font-size:2rem; margin-bottom:0.5rem;">💳</div>
                            <strong>LendMN</strong>
                            <p style="font-size:0.85rem; color:#666; margin-top:0.3rem;">Зээлээр авах</p>
                        </button>
                        <button class="social-pay-btn pocket" onclick="selectSocialPay('pocket')">
                            <div style="font-size:2rem; margin-bottom:0.5rem;">🎒</div>
                            <strong>Pocket</strong>
                            <p style="font-size:0.85rem; color:#666; margin-top:0.3rem;">Цахим хэтэвч</p>
                        </button>
                    </div>
                    <div id="socialPayDetails" style="margin-top:1.5rem; padding:1rem; background:white; border-radius:8px; display:none;">
                        <p style="text-align:center; color:#666;">
                            Төлбөрийн хэрэгсэл сонгоно уу
                        </p>
                    </div>
                </div>
            `;
            break;
    }
}

function formatCardNumber(e) {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue;
}

function formatExpiry(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    e.target.value = value;
}

function formatCVV(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
}

function copyBankInfo() {
    const ref = document.getElementById('transferRef').textContent;
    const info = 'Банк: Хаан Банк\nДанс: 5021234567\nЭзэмшигч: Japan Market LLC\nУтга: ' + ref + '\nДүн: ₮' + paymentData.total.toLocaleString();
    
    navigator.clipboard.writeText(info).then(() => {
        showToast('success', '📋 Хуулагдлаа!');
    });
}

function selectSocialPay(provider) {
    const details = document.getElementById('socialPayDetails');
    details.style.display = 'block';
    
    if (provider === 'lendmn') {
        details.innerHTML = `
            <h4 style="color:#ff6b6b; margin-bottom:1rem;">💳 LendMN зээл</h4>
            <div class="form-group">
                <label>Утасны дугаар</label>
                <input type="text" placeholder="99999999" maxlength="8">
            </div>
            <div class="form-group">
                <label>Зээлийн хугацаа</label>
                <select>
                    <option>1 сар (3% хүү)</option>
                    <option>3 сар (5% хүү)</option>
                    <option>6 сар (8% хүү)</option>
                </select>
            </div>
            <p style="color:#666; font-size:0.9rem;">
                💰 Сарын төлбөр: ~₮${Math.round(paymentData.total / 3).toLocaleString()}
            </p>
        `;
    } else {
        details.innerHTML = `
            <h4 style="color:#4834d4; margin-bottom:1rem;">🎒 Pocket Pay</h4>
            <div class="form-group">
                <label>Утасны дугаар</label>
                <input type="text" placeholder="99999999" maxlength="8">
            </div>
            <div class="form-group">
                <label>Pocket PIN</label>
                <input type="password" placeholder="••••" maxlength="4">
            </div>
            <p style="color:#666; font-size:0.9rem;">
                ℹ️ Pocket апп руу баталгаажуулах код илгээнэ
            </p>
        `;
    }
}

function processPayment() {
    const method = paymentData.selectedMethod;
    
    // Validate based on payment method
    if (method === 'card') {
        const cardNumber = document.getElementById('cardNumber')?.value;
        const cardExpiry = document.getElementById('cardExpiry')?.value;
        const cardCVV = document.getElementById('cardCVV')?.value;
        const cardName = document.getElementById('cardName')?.value;
        
        if (!cardNumber || !cardExpiry || !cardCVV || !cardName) {
            showToast('error', '⚠️ Бүх талбарыг бөглөнө үү!');
            return;
        }
        
        if (cardNumber.replace(/\s/g, '').length < 16) {
            showToast('error', '⚠️ Картын дугаар буруу байна!');
            return;
        }
    }
    
    // Show processing
    const btn = document.querySelector('.payment-actions .btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = '⏳ Төлж байна...';
    btn.disabled = true;
    
    // Simulate payment processing
    setTimeout(() => {
        completeOrder(method);
        closePaymentModal();
        closeCartModal();
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 2000);
}

function completeOrder(paymentMethod) {
    const cart = getCart();
    const user = JSON.parse(localStorage.getItem('japanUser'));
    
    if (!user) {
        showToast('error', '⚠️ Эхлээд нэвтэрнэ үү!');
        return;
    }
    
    const orderNumber = 'JM' + Date.now().toString().slice(-8);
    
    const order = {
        id: Date.now(),
        orderNumber: orderNumber,
        userId: user.email,
        items: cart,
        subtotal: paymentData.subtotal,
        discount: paymentData.discount,
        shipping: paymentData.shipping,
        total: paymentData.total,
        paymentMethod: paymentMethod,
        promoCode: appliedPromo ? appliedPromo.code : null,
        deliveryMethod: deliveryMethod,
        address: savedAddresses[selectedAddressIndex] || null,
        orderNotes: document.getElementById('orderNotes')?.value || '',
        giftWrap: document.getElementById('giftWrap')?.checked || false,
        callBefore: document.getElementById('callBefore')?.checked || false,
        status: 'pending',
        date: new Date().toISOString()
    };
    
    // Save order
    let allOrders = JSON.parse(localStorage.getItem('japanOrders') || '[]');
    allOrders.push(order);
    localStorage.setItem('japanOrders', JSON.stringify(allOrders));
    
    // Clear cart
    localStorage.setItem('japanCart', JSON.stringify([]));
    updateCartCount();
    
    // Send email notification
    sendOrderEmail(order, user);
    
    showToast('success', '🎉 Захиалга амжилттай! #' + orderNumber);
    
    // Show notification
    setTimeout(() => {
        showToast('info', '📦 Таны захиалга боловсруулагдаж байна...');
    }, 2000);
}

// ============================================
// EMAIL NOTIFICATION SYSTEM
// ============================================

function sendOrderEmail(order, user) {
    // Create email template parameters
    const itemsList = order.items.map(item => 
        `${item.name} x${item.quantity} - ₮${(item.price_tugrik * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const paymentMethodText = getPaymentMethodText(order.paymentMethod);
    const deliveryMethodText = getDeliveryMethodText(order.deliveryMethod);
    
    const addressText = order.address ? 
        `${order.address.city}, ${order.address.district}, ${order.address.address}\nУтас: ${order.address.phone}` : 
        'Хаяг бүртгээгүй';
    
    const templateParams = {
        to_email: 'tsewegmidmonhotgon@gmail.com', // Admin email
        user_email: user.email,
        user_name: user.name || user.email,
        order_number: order.orderNumber,
        order_date: new Date(order.date).toLocaleString('mn-MN'),
        items_list: itemsList,
        subtotal: '₮' + order.subtotal.toLocaleString(),
        discount: order.discount > 0 ? '-₮' + order.discount.toLocaleString() : '₮0',
        shipping: '₮' + order.shipping.toLocaleString(),
        total: '₮' + order.total.toLocaleString(),
        payment_method: paymentMethodText,
        delivery_method: deliveryMethodText,
        address: addressText,
        notes: order.orderNotes || 'Тэмдэглэл байхгүй',
        promo_code: order.promoCode || 'Ашиглаагүй'
    };
    
    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('✅ И-мэйл амжилттай илгээгдлээ!', response.status, response.text);
            showToast('success', '📧 И-мэйл баталгаажуулалт илгээгдлээ!');
        }, function(error) {
            console.error('❌ И-мэйл илгээхэд алдаа гарлаа:', error);
            // Don't show error to user, order is still completed
        });
}

function getPaymentMethodText(method) {
    const methods = {
        'card': '💳 Картаар',
        'qpay': '📱 QPay',
        'bank': '🏦 Шилжүүлэг',
        'cash': '💵 Бэлнээр',
        'social': '🌐 Social Pay'
    };
    return methods[method] || method;
}

function getDeliveryMethodText(method) {
    const methods = {
        'standard': '📦 Стандарт хүргэлт (3-5 хоног)',
        'express': '⚡ Түргэн хүргэлт (1-2 хоног)',
        'pickup': '🏪 Дэлгүүрээс авах'
    };
    return methods[method] || method;
}

// ============================================
// PAYMENT INITIALIZATION
// ============================================

function initializePayment() {
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', (e) => {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            const methodType = e.currentTarget.dataset.method;
            document.querySelectorAll('.payment-form').forEach(f => f.classList.remove('active'));
            document.getElementById(methodType + 'Payment').classList.add('active');
        });
    });
}

function openPaymentModal() {
    if (cart.length === 0) {
        showToast('error', '🛒 Сагс хоосон байна!');
        return;
    }
    
    const orderRef = 'JM' + Date.now();
    document.getElementById('orderRef').textContent = orderRef;
    document.getElementById('paymentModal').style.display = 'block';
}

function copyBankDetails() {
    const details = 'Банк: Хаан Банк\nДанс: 5021234567\nЭзэмшигч: Japan Market LLC\nУтга: ' + document.getElementById('orderRef').textContent;
    navigator.clipboard.writeText(details);
    showToast('success', '📋 Хуулагдлаа!');
}

// ============================================
// SEARCH SYSTEM
// ============================================

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    const sortBy = document.getElementById('sortBy');
    const category = document.getElementById('searchCategory');
    
    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
    }
    if (minPrice) {
        minPrice.addEventListener('input', (e) => {
            document.getElementById('minPriceValue').textContent = '₮' + parseInt(e.target.value).toLocaleString();
            performSearch();
        });
    }
    if (maxPrice) {
        maxPrice.addEventListener('input', (e) => {
            document.getElementById('maxPriceValue').textContent = '₮' + parseInt(e.target.value).toLocaleString();
            performSearch();
        });
    }
    if (sortBy) {
        sortBy.addEventListener('change', performSearch);
    }
    if (category) {
        category.addEventListener('change', performSearch);
    }
}

function openSearchModal() {
    document.getElementById('searchModal').style.display = 'flex';
    document.getElementById('searchInput').focus();
    loadSearchHistory();
    displaySearchHistory();
}

// Search History Management
function saveSearchHistory(query) {
    if (!query || query.trim() === '') return;
    
    let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    
    // Remove if already exists
    history = history.filter(item => item !== query);
    
    // Add to beginning
    history.unshift(query);
    
    // Keep only last 10
    if (history.length > 10) {
        history = history.slice(0, 10);
    }
    
    localStorage.setItem('searchHistory', JSON.stringify(history));
}

function loadSearchHistory() {
    return JSON.parse(localStorage.getItem('searchHistory') || '[]');
}

function displaySearchHistory() {
    const history = loadSearchHistory();
    const historyContainer = document.getElementById('searchHistory');
    const historyList = document.getElementById('searchHistoryList');
    
    if (history.length === 0) {
        historyContainer.style.display = 'none';
        return;
    }
    
    historyContainer.style.display = 'block';
    historyList.innerHTML = history.map(item => 
        '<div class="history-item">' +
        '<span class="history-text" onclick="useHistorySearch(\'' + item + '\')">' +
        '<span class="history-icon">🕒</span> ' + item +
        '</span>' +
        '<button class="delete-history-btn" onclick="deleteSearchItem(\'' + item + '\')">✕</button>' +
        '</div>'
    ).join('');
}

function deleteSearchItem(query) {
    let history = loadSearchHistory();
    history = history.filter(item => item !== query);
    localStorage.setItem('searchHistory', JSON.stringify(history));
    displaySearchHistory();
}

function clearAllSearchHistory() {
    localStorage.removeItem('searchHistory');
    displaySearchHistory();
}

function useHistorySearch(query) {
    document.getElementById('searchInput').value = query;
    performSearch();
}

// Autocomplete Functionality
function handleSearchInput() {
    const input = document.getElementById('searchInput');
    const query = input.value.toLowerCase();
    const clearBtn = document.querySelector('.clear-search-btn');
    
    // Show/hide clear button
    if (query) {
        clearBtn.style.display = 'block';
    } else {
        clearBtn.style.display = 'none';
        document.getElementById('searchAutocomplete').style.display = 'none';
        return;
    }
    
    // Get suggestions
    const suggestions = getSearchSuggestions(query);
    displayAutocomplete(suggestions, query);
}

function getSearchSuggestions(query) {
    if (query.length < 2) return [];
    
    const suggestions = [];
    const seen = new Set();
    
    // From products
    productsData.forEach(product => {
        const name = product.name.toLowerCase();
        const nameJp = product.name_jp.toLowerCase();
        
        if ((name.includes(query) || nameJp.includes(query)) && !seen.has(product.name)) {
            suggestions.push({
                text: product.name,
                type: 'product',
                icon: '📦'
            });
            seen.add(product.name);
        }
    });
    
    // From search history
    const history = loadSearchHistory();
    history.forEach(item => {
        if (item.toLowerCase().includes(query) && !seen.has(item)) {
            suggestions.push({
                text: item,
                type: 'history',
                icon: '🕒'
            });
            seen.add(item);
        }
    });
    
    // Popular searches
    const popular = ['iPhone', 'Samsung', 'Canon', 'Sony', 'Nike', 'Toyota'];
    popular.forEach(item => {
        if (item.toLowerCase().includes(query) && !seen.has(item.toLowerCase())) {
            suggestions.push({
                text: item,
                type: 'popular',
                icon: '🔥'
            });
            seen.add(item.toLowerCase());
        }
    });
    
    return suggestions.slice(0, 8);
}

function displayAutocomplete(suggestions, query) {
    const container = document.getElementById('searchAutocomplete');
    
    if (suggestions.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    container.innerHTML = suggestions.map(item => 
        '<div class="autocomplete-item" onclick="selectAutocomplete(\'' + item.text.replace(/'/g, "\\'") + '\')">' +
        '<span class="autocomplete-icon">' + item.icon + '</span>' +
        '<span class="autocomplete-text">' + highlightQuery(item.text, query) + '</span>' +
        '</div>'
    ).join('');
}

function highlightQuery(text, query) {
    const regex = new RegExp('(' + query + ')', 'gi');
    return text.replace(regex, '<strong>$1</strong>');
}

function selectAutocomplete(text) {
    document.getElementById('searchInput').value = text;
    document.getElementById('searchAutocomplete').style.display = 'none';
    performSearch();
}

function handleSearchKeydown(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

function clearSearchInput() {
    document.getElementById('searchInput').value = '';
    document.querySelector('.clear-search-btn').style.display = 'none';
    document.getElementById('searchAutocomplete').style.display = 'none';
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('resultsCounter').style.display = 'none';
}

// Active Filters Display
function displayActiveFilters() {
    const container = document.getElementById('activeFilters');
    const filters = [];
    
    // Category
    const category = document.getElementById('searchCategory').value;
    if (category) {
        const categoryText = document.querySelector('#searchCategory option[value="' + category + '"]').textContent;
        filters.push({
            type: 'category',
            label: 'Ангилал: ' + categoryText,
            value: category
        });
    }
    
    // Rating
    ['rating5', 'rating4', 'rating3'].forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox.checked) {
            filters.push({
                type: 'rating',
                label: '⭐ ' + checkbox.nextElementSibling.textContent,
                value: id
            });
        }
    });
    
    // Condition
    ['conditionNew', 'conditionUsed', 'conditionExcellent'].forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox.checked) {
            filters.push({
                type: 'condition',
                label: '🏷️ ' + checkbox.nextElementSibling.textContent,
                value: id
            });
        }
    });
    
    // Discount
    if (document.getElementById('hasDiscount').checked) {
        filters.push({
            type: 'discount',
            label: '💰 Хямдралтай',
            value: 'hasDiscount'
        });
    }
    
    // Price
    const minPrice = parseInt(document.getElementById('minPrice').value);
    const maxPrice = parseInt(document.getElementById('maxPrice').value);
    if (minPrice > 0 || maxPrice < 5000000) {
        filters.push({
            type: 'price',
            label: 'Үнэ: ₮' + minPrice.toLocaleString() + ' - ₮' + maxPrice.toLocaleString(),
            value: 'price'
        });
    }
    
    if (filters.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'flex';
    container.innerHTML = 
        '<span class="filter-label">Идэвхтэй шүүлт:</span>' +
        filters.map(filter => 
            '<span class="filter-tag">' +
            filter.label +
            ' <button class="remove-filter-btn" onclick="removeFilter(\'' + filter.type + '\', \'' + filter.value + '\')">✕</button>' +
            '</span>'
        ).join('') +
        '<button class="clear-all-filters-btn" onclick="clearAllFilters()">Бүгдийг арилгах</button>';
}

function removeFilter(type, value) {
    if (type === 'category') {
        document.getElementById('searchCategory').value = '';
    } else if (type === 'rating' || type === 'condition' || type === 'discount') {
        document.getElementById(value).checked = false;
    } else if (type === 'price') {
        document.getElementById('minPrice').value = 0;
        document.getElementById('maxPrice').value = 5000000;
        updatePriceValues();
    }
    performSearch();
}

function clearAllFilters() {
    document.getElementById('searchCategory').value = '';
    ['rating5', 'rating4', 'rating3', 'conditionNew', 'conditionUsed', 'conditionExcellent', 'hasDiscount'].forEach(id => {
        document.getElementById(id).checked = false;
    });
    document.getElementById('minPrice').value = 0;
    document.getElementById('maxPrice').value = 5000000;
    updatePriceValues();
    performSearch();
}

function updatePriceValues() {
    const minPrice = parseInt(document.getElementById('minPrice').value);
    const maxPrice = parseInt(document.getElementById('maxPrice').value);
    document.getElementById('minPriceValue').textContent = '₮' + minPrice.toLocaleString();
    document.getElementById('maxPriceValue').textContent = '₮' + maxPrice.toLocaleString();
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('searchCategory').value;
    const minPrice = parseInt(document.getElementById('minPrice').value);
    const maxPrice = parseInt(document.getElementById('maxPrice').value);
    const sortBy = document.getElementById('sortBy').value;
    
    // Get selected ratings
    const selectedRatings = [];
    if (document.getElementById('rating5').checked) selectedRatings.push(5);
    if (document.getElementById('rating4').checked) selectedRatings.push(4);
    if (document.getElementById('rating3').checked) selectedRatings.push(3);
    
    // Get selected conditions
    const selectedConditions = [];
    if (document.getElementById('conditionNew').checked) selectedConditions.push('new');
    if (document.getElementById('conditionUsed').checked) selectedConditions.push('used');
    if (document.getElementById('conditionExcellent').checked) selectedConditions.push('excellent');
    
    // Discount filter
    const hasDiscount = document.getElementById('hasDiscount').checked;
    
    // Save search to history if query exists
    if (query) {
        saveSearchHistory(query);
    }
    
    // Hide autocomplete
    document.getElementById('searchAutocomplete').style.display = 'none';
    
    let results = productsData.filter(product => {
        const matchesQuery = !query || 
            product.name.toLowerCase().includes(query) || 
            product.name_jp.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query);
        const matchesCategory = !category || product.category === category;
        const matchesPrice = product.price_tugrik >= minPrice && product.price_tugrik <= maxPrice;
        
        // Rating filter
        const matchesRating = selectedRatings.length === 0 || selectedRatings.some(rating => {
            if (rating === 5) return product.rating === 5;
            if (rating === 4) return product.rating >= 4;
            if (rating === 3) return product.rating >= 3;
            return false;
        });
        
        // Condition filter (assuming products have 'condition' property, default to 'used')
        const productCondition = product.condition || 'used';
        const matchesCondition = selectedConditions.length === 0 || selectedConditions.includes(productCondition);
        
        // Discount filter (assuming products have 'discount' property)
        const matchesDiscount = !hasDiscount || (product.discount && product.discount > 0);
        
        return matchesQuery && matchesCategory && matchesPrice && matchesRating && matchesCondition && matchesDiscount;
    });
    
    // Sort results
    if (sortBy === 'price-low') {
        results.sort((a, b) => a.price_tugrik - b.price_tugrik);
    } else if (sortBy === 'price-high') {
        results.sort((a, b) => b.price_tugrik - a.price_tugrik);
    } else if (sortBy === 'rating') {
        results.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
        results.reverse();
    }
    
    displayActiveFilters();
    displayResultsCounter(results.length, query);
    displaySearchResults(results, query);
}

function displayResultsCounter(count, query) {
    const container = document.getElementById('resultsCounter');
    
    if (count === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    container.innerHTML = 
        '<span class="results-count">🔍 <strong>' + count + '</strong> бараа олдлоо</span>';
}

function displaySearchResults(results, query) {
    const container = document.getElementById('searchResults');
    
    if (results.length === 0) {
        const suggestions = ['iPhone', 'Camera', 'Fashion', 'Laptop', 'Headphones', 'Watch'];
        container.innerHTML = 
            '<div class="no-results">' +
            '<div class="no-results-icon">😢</div>' +
            '<h3>Хайлтын үр дүн олдсонгүй</h3>' +
            '<p>Та өөр түлхүүр үг ашиглан хайна уу</p>' +
            '<div class="search-suggestions">' +
            '<strong>Эдгээрийг туршаад үзнэ үү:</strong>' +
            '<div class="suggestion-chips">' +
            suggestions.map(item => 
                '<span class="suggestion-chip" onclick="searchSuggestion(\'' + item + '\')">' + item + '</span>'
            ).join('') +
            '</div>' +
            '</div>' +
            '</div>';
        return;
    }
    
    container.innerHTML = results.map(product => {
        const productName = query ? highlightQuery(product.name, query) : product.name;
        return '<div class="search-result-card">' +
            '<div class="search-result-image" onclick="openProductDetail(' + product.id + '); closeModals();">' +
            '<img src="' + product.images[0] + '" alt="' + product.name + '">' +
            '<div class="search-quick-view">👁️ Дэлгэрэнгүй</div>' +
            '</div>' +
            '<div class="search-result-info">' +
            '<h4>' + productName + '</h4>' +
            '<div class="product-rating">' + '⭐'.repeat(Math.floor(product.rating)) + ' ' + product.rating + '</div>' +
            '<p class="price-tugrik">₮' + product.price_tugrik.toLocaleString() + '</p>' +
            '</div>' +
            '<div class="search-result-actions">' +
            '<button class="search-detail-btn" onclick="openProductDetail(' + product.id + '); closeModals();">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
            '<circle cx="12" cy="12" r="10"></circle>' +
            '<line x1="12" y1="16" x2="12" y2="12"></line>' +
            '<line x1="12" y1="8" x2="12.01" y2="8"></line>' +
            '</svg>' +
            'Дэлгэрэнгүй' +
            '</button>' +
            '<button class="search-buy-btn" onclick="goToProductPage(' + product.id + ')">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
            '<path d="M9 18l6-6-6-6"></path>' +
            '</svg>' +
            'Зарлуу руу' +
            '</button>' +
            '</div>' +
            '</div>';
    }).join('');
}

function goToProductPage(productId) {
    // Close search modal
    closeModals();
    
    // Scroll to products section
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    
    // Filter to show only this product category
    const product = productsData.find(p => p.id === productId);
    if (product) {
        currentFilter = product.category;
        loadProducts();
        
        // Highlight the product
        setTimeout(function() {
            const productCard = document.querySelector('[onclick*="openProductDetail(' + productId + ')"]');
            if (productCard) {
                productCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                productCard.style.animation = 'highlightProduct 2s ease';
            }
        }, 500);
        
        // Show notification
        showToast('success', '✨ Зарлуу руу шилжлээ!');
    }
}

function searchSuggestion(text) {
    document.getElementById('searchInput').value = text;
    performSearch();
}

// ============================================
// REVIEW SYSTEM
// ============================================

function initializeReviews() {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                    s.textContent = '★';
                } else {
                    s.classList.remove('active');
                    s.textContent = '☆';
                }
            });
        });
        
        star.addEventListener('mouseover', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.textContent = '★';
                } else {
                    s.textContent = '☆';
                }
            });
        });
    });
}

let currentReviewProductId = null;
let selectedRating = 0;
let reviewImages = [];

function openReviewModal(productId) {
    if (!currentUser) {
        showToast('error', '🔐 Сэтгэгдэл бичихийн тулд нэвтэрнэ үү!');
        openAuthModal();
        return;
    }
    
    currentReviewProductId = productId;
    const product = productsData.find(p => p.id === productId);
    
    if (product) {
        // Populate product info
        document.getElementById('reviewProductImage').src = product.images[0];
        document.getElementById('reviewProductName').textContent = product.name;
        document.getElementById('reviewProductPrice').textContent = `₮${product.price_tugrik.toLocaleString()}`;
    }
    
    // Reset form
    selectedRating = 0;
    reviewImages = [];
    document.getElementById('reviewForm').reset();
    document.getElementById('reviewImagePreview').innerHTML = '';
    document.querySelectorAll('.star-btn').forEach(star => {
        star.classList.remove('active');
    });
    document.getElementById('ratingText').textContent = 'Одыг дарж үнэлгээ өгнө үү';
    document.getElementById('ratingText').classList.remove('selected');
    
    // Show modal
    document.getElementById('reviewModal').style.display = 'block';
    
    // Initialize star rating
    initializeStarRating();
    
    // Initialize image upload
    initializeReviewImageUpload();
}

function closeReviewModal() {
    document.getElementById('reviewModal').style.display = 'none';
    currentReviewProductId = null;
    selectedRating = 0;
    reviewImages = [];
}

function initializeStarRating() {
    const stars = document.querySelectorAll('.star-btn');
    const ratingText = document.getElementById('ratingText');
    
    const ratingTexts = {
        1: '😞 Маш муу',
        2: '😐 Муу',
        3: '🙂 Дунд зэрэг',
        4: '😊 Сайн',
        5: '🤩 Маш сайн!'
    };
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            selectedRating = rating;
            
            // Update stars
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            // Update text
            ratingText.textContent = ratingTexts[rating];
            ratingText.classList.add('selected');
        });
        
        // Hover effect
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.dataset.rating);
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
    
    // Reset on mouse leave
    document.getElementById('reviewStarRating').addEventListener('mouseleave', function() {
        stars.forEach((s, index) => {
            if (index < selectedRating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
}

function initializeReviewImageUpload() {
    const input = document.getElementById('reviewImageInput');
    const preview = document.getElementById('reviewImagePreview');
    
    input.addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        
        // Limit to 5 images
        if (reviewImages.length + files.length > 5) {
            showToast('warning', '⚠️ Хамгийн ихдээ 5 зураг оруулах боломжтой!');
            return;
        }
        
        files.forEach(file => {
            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                showToast('error', `❌ ${file.name} файл хэт том байна! (Хамгийн ихдээ 5MB)`);
                return;
            }
            
            // Check file type
            if (!file.type.startsWith('image/')) {
                showToast('error', `❌ ${file.name} зураг биш байна!`);
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(event) {
                reviewImages.push({
                    file: file,
                    data: event.target.result
                });
                
                renderReviewImagePreview();
            };
            reader.readAsDataURL(file);
        });
        
        // Reset input
        input.value = '';
    });
}

function renderReviewImagePreview() {
    const preview = document.getElementById('reviewImagePreview');
    preview.innerHTML = reviewImages.map((img, index) => `
        <div class="review-image-item">
            <img src="${img.data}" alt="Review Image ${index + 1}">
            <button type="button" class="review-image-remove" onclick="removeReviewImage(${index})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    `).join('');
}

function removeReviewImage(index) {
    reviewImages.splice(index, 1);
    renderReviewImagePreview();
    showToast('success', '✅ Зураг устгагдлаа');
}

function submitReview(e) {
    e.preventDefault();
    
    if (!currentUser) {
        showToast('error', '🔐 Нэвтэрч орно уу!');
        openAuthModal();
        return;
    }
    
    if (selectedRating === 0) {
        showToast('error', '⭐ Үнэлгээ өгнө үү!');
        return;
    }
    
    const reviewText = document.getElementById('reviewText').value.trim();
    if (reviewText.length < 20) {
        showToast('error', '📝 Сэтгэгдэл хэт богино байна! (Багадаа 20 тэмдэгт)');
        return;
    }
    
    const isAnonymous = document.getElementById('reviewAnonymous').checked;
    
    // Create review object
    const review = {
        id: Date.now(),
        productId: currentReviewProductId,
        userId: currentUser.id,
        userName: isAnonymous ? 'Нууц хэрэглэгч' : currentUser.name,
        rating: selectedRating,
        comment: reviewText,
        images: reviewImages.map(img => img.data),
        isAnonymous: isAnonymous,
        date: new Date().toISOString(),
        likes: 0,
        helpful: 0
    };
    
    // Save to localStorage
    let reviews = JSON.parse(localStorage.getItem('productReviews')) || [];
    reviews.push(review);
    localStorage.setItem('productReviews', JSON.stringify(reviews));
    
    showToast('success', '✅ Үнэлгээ амжилттай илгээгдлээ! Баярлалаа! 🎉');
    closeReviewModal();
    
    // Reload reviews if product detail modal is open
    if (currentReviewProductId) {
        loadProductReviews(currentReviewProductId);
    }
}

// ============================================
// PRODUCT REVIEWS DISPLAY
// ============================================

let currentProductIdForReviews = null;

function loadProductReviews(productId) {
    currentProductIdForReviews = productId;
    
    // Get all reviews for this product
    let allReviews = JSON.parse(localStorage.getItem('productReviews')) || [];
    let productReviews = allReviews.filter(r => r.productId === productId);
    
    // If no reviews, create demo reviews
    if (productReviews.length === 0) {
        productReviews = createDemoReviews(productId);
        // Save demo reviews
        allReviews = [...allReviews, ...productReviews];
        localStorage.setItem('productReviews', JSON.stringify(allReviews));
    }
    
    // Calculate statistics
    const stats = calculateReviewStats(productReviews);
    updateReviewStats(stats, productReviews.length);
    
    // Display reviews
    displayReviews(productReviews);
}

function createDemoReviews(productId) {
    const demoReviews = [
        {
            id: Date.now() + 1,
            productId: productId,
            userId: 1001,
            userName: 'Баярмаа Б.',
            rating: 5,
            comment: 'Маш сайн бараа байлаа! Чанар сайн, үнэ хямд. Япон барааны чанарыг үнэхээр мэдэрлээ. Хүргэлт ч хурдан байсан. Дахиад захиалах болно.',
            images: [],
            isAnonymous: false,
            date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            likes: 12,
            helpful: 8,
            verified: true
        },
        {
            id: Date.now() + 2,
            productId: productId,
            userId: 1002,
            userName: 'Болд Д.',
            rating: 5,
            comment: 'Үнэхээр гайхалтай! Япон барааны чанар бол чанар. Хэдий хуучин гэсэн ч шинэ мэт байна. Худалдагч нь ч маш найрсаг, хүргэлт хурдан.',
            images: [],
            isAnonymous: false,
            date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
            likes: 8,
            helpful: 5,
            verified: true
        },
        {
            id: Date.now() + 3,
            productId: productId,
            userId: 1003,
            userName: 'Сарнай Ц.',
            rating: 4,
            comment: 'Бараа сайн ч хүргэлт бага зэрэг удсан. Гэхдээ чанар нь маш сайхан байсан. Үнэ ч хямд. Санал болгож байна.',
            images: [],
            isAnonymous: false,
            date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            likes: 5,
            helpful: 3,
            verified: false
        },
        {
            id: Date.now() + 4,
            productId: productId,
            userId: 1004,
            userName: 'Нууц хэрэглэгч',
            rating: 5,
            comment: 'Дахиад худалдаж авлаа! Найз нөхөддөө ч санал болгосон. Чанар, үнэ бүгд тохирсон.',
            images: [],
            isAnonymous: true,
            date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
            likes: 15,
            helpful: 10,
            verified: true
        },
        {
            id: Date.now() + 5,
            productId: productId,
            userId: 1005,
            userName: 'Ганбат Г.',
            rating: 3,
            comment: 'Бараа ер нь муу биш. Гэхдээ миний хүлээлтээс бага зэрэг доогуур байлаа. Үнэ хямд учраас зөв.',
            images: [],
            isAnonymous: false,
            date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
            likes: 2,
            helpful: 1,
            verified: false
        }
    ];
    
    return demoReviews;
}

function calculateReviewStats(reviews) {
    const stats = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0
    };
    
    reviews.forEach(review => {
        stats[review.rating]++;
    });
    
    const total = reviews.length;
    const average = reviews.reduce((sum, r) => sum + r.rating, 0) / total;
    
    return {
        breakdown: stats,
        total: total,
        average: average.toFixed(1)
    };
}

function updateReviewStats(stats, totalCount) {
    // Update average rating
    document.getElementById('avgRating').textContent = stats.average;
    document.getElementById('avgStars').textContent = '⭐'.repeat(Math.round(stats.average));
    document.getElementById('totalReviewsCount').textContent = `${totalCount} үнэлгээ`;
    
    // Update rating bars
    for (let i = 5; i >= 1; i--) {
        const count = stats.breakdown[i];
        const percentage = totalCount > 0 ? (count / totalCount * 100) : 0;
        
        document.getElementById(`rating${i}Bar`).style.width = percentage + '%';
        document.getElementById(`rating${i}Count`).textContent = count;
    }
}

function displayReviews(reviews, filter = 'all') {
    const reviewsList = document.getElementById('productReviewsList');
    
    // Filter reviews
    let filteredReviews = reviews;
    if (filter !== 'all') {
        if (filter === 'images') {
            filteredReviews = reviews.filter(r => r.images && r.images.length > 0);
        } else {
            filteredReviews = reviews.filter(r => r.rating === filter);
        }
    }
    
    // Sort by date (newest first)
    filteredReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (filteredReviews.length === 0) {
        reviewsList.innerHTML = `
            <div class="reviews-empty">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <h4>Үнэлгээ байхгүй байна</h4>
                <p>Та анхны үнэлгээг үлдээнэ үү!</p>
                <button class="btn-write-review" onclick="openReviewModalFromDetail()">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    Үнэлгээ бичих
                </button>
            </div>
        `;
        return;
    }
    
    const reviewsHTML = filteredReviews.map(review => {
        const reviewDate = new Date(review.date);
        const timeAgo = getTimeAgo(reviewDate);
        const userInitial = review.userName.charAt(0).toUpperCase();
        const stars = '⭐'.repeat(review.rating);
        
        let imagesHTML = '';
        if (review.images && review.images.length > 0) {
            imagesHTML = `
                <div class="review-images">
                    ${review.images.map((img, idx) => `
                        <div class="review-image" onclick="viewReviewImage('${img}')">
                            <img src="${img}" alt="Review image ${idx + 1}">
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        return `
            <div class="review-item">
                <div class="review-header">
                    <div class="review-user-info">
                        <div class="review-avatar">${userInitial}</div>
                        <div class="review-user-details">
                            <h4>${review.userName}</h4>
                            <div class="review-date">${timeAgo}</div>
                        </div>
                    </div>
                    <div class="review-rating">
                        <div class="review-stars">${stars}</div>
                        ${review.verified ? '<span class="review-verified">✓ Баталгаажсан</span>' : ''}
                    </div>
                </div>
                <div class="review-content">
                    <p class="review-text">${review.comment}</p>
                    ${imagesHTML}
                </div>
                <div class="review-footer">
                    <button class="review-action ${review.userLiked ? 'liked' : ''}" onclick="likeReview(${review.id})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        Тустай (${review.likes})
                    </button>
                    <button class="review-action" onclick="shareReview(${review.id})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                        Хуваалцах
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    reviewsList.innerHTML = reviewsHTML;
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
    if (days < 30) return `${Math.floor(days / 7)} долоо хоногийн өмнө`;
    if (days < 365) return `${Math.floor(days / 30)} сарын өмнө`;
    return `${Math.floor(days / 365)} жилийн өмнө`;
}

function filterReviews(filter) {
    // Update active filter button
    document.querySelectorAll('.review-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Get reviews and re-display
    let allReviews = JSON.parse(localStorage.getItem('productReviews')) || [];
    let productReviews = allReviews.filter(r => r.productId === currentProductIdForReviews);
    displayReviews(productReviews, filter);
}

function openReviewModalFromDetail() {
    if (currentProductIdForReviews) {
        openReviewModal(currentProductIdForReviews);
    }
}

function likeReview(reviewId) {
    let allReviews = JSON.parse(localStorage.getItem('productReviews')) || [];
    const review = allReviews.find(r => r.id === reviewId);
    
    if (review) {
        if (!review.userLiked) {
            review.likes++;
            review.userLiked = true;
        } else {
            review.likes--;
            review.userLiked = false;
        }
        
        localStorage.setItem('productReviews', JSON.stringify(allReviews));
        
        // Reload reviews
        let productReviews = allReviews.filter(r => r.productId === currentProductIdForReviews);
        displayReviews(productReviews);
        
        showToast('success', review.userLiked ? '👍 Таалагдлаа!' : '👋 Буцаалаа');
    }
}

function shareReview(reviewId) {
    showToast('info', '🔗 Хуваалцах функц удахгүй нэмэгдэнэ!');
}

function viewReviewImage(imageUrl) {
    // Create lightbox modal
    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay" onclick="this.parentElement.remove()"></div>
        <div class="lightbox-content">
            <img src="${imageUrl}" alt="Review image">
            <button class="lightbox-close" onclick="this.closest('.image-lightbox').remove()">✕</button>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    setTimeout(() => lightbox.classList.add('active'), 10);
}


// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showToast(type, message) {
    const icons = {
        'success': '✅',
        'error': '❌',
        'info': 'ℹ️',
        'warning': '⚠️'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <span class="toast-content">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
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
    if (existingAlert) existingAlert.remove();
    
    // Create alert
    const alertOverlay = document.createElement('div');
    alertOverlay.className = 'custom-alert-overlay';
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
    
    // Add animation
    setTimeout(() => alertOverlay.classList.add('active'), 10);
    
    // Event listeners
    const confirmBtn = alertOverlay.querySelector('.custom-alert-confirm');
    const cancelBtn = alertOverlay.querySelector('.custom-alert-cancel');
    
    confirmBtn.addEventListener('click', () => {
        alertOverlay.classList.remove('active');
        setTimeout(() => alertOverlay.remove(), 300);
        if (onConfirm) onConfirm();
    });
    
    cancelBtn.addEventListener('click', () => {
        alertOverlay.classList.remove('active');
        setTimeout(() => alertOverlay.remove(), 300);
        if (onCancel) onCancel();
    });
    
    // Click outside to close
    alertOverlay.addEventListener('click', (e) => {
        if (e.target === alertOverlay) {
            alertOverlay.classList.remove('active');
            setTimeout(() => alertOverlay.remove(), 300);
            if (onCancel) onCancel();
        }
    });
}

// Update checkout to use payment modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('checkout-btn')) {
        closeModals();
        setTimeout(openPaymentModal, 300);
    }
});

// Payment form submissions
document.addEventListener('submit', (e) => {
    if (e.target.closest('#cardPayment')) {
        e.preventDefault();
        processPayment('card');
    }
});

function processPayment(method) {
    const total = cart.reduce((sum, item) => sum + (item.price_tugrik * item.quantity), 0) + 50000;
    const orderNumber = 'JM' + Date.now();
    
    // Create order
    const order = {
        orderNumber,
        items: [...cart],
        total,
        status: 'pending',
        date: new Date().toLocaleDateString('mn-MN'),
        paymentMethod: method
    };
    
    userOrders.unshift(order);
    localStorage.setItem('japanOrders', JSON.stringify(userOrders));
    
    // Clear cart
    cart = [];
    localStorage.setItem('japanCart', JSON.stringify(cart));
    updateCartCount();
    
    closeModals();
    showToast('success', '🎉 Захиалга амжилттай! #' + orderNumber);
    
    // Show notification after 2 seconds
    setTimeout(() => {
        showToast('info', '📦 Таны захиалга боловсруулагдаж байна...');
    }, 2000);
}

// ============================================
// ADMIN PANEL SYSTEM
// ============================================

// ============================================
// IMAGE UPLOAD FUNCTIONS
// ============================================

function handleImageUpload(event) {
    const files = event.target.files;
    const previewContainer = document.getElementById('imagePreview');
    
    if (files.length === 0) return;
    
    if (files.length > 4) {
        showToast('error', '⚠️ Дээд тал нь 4 зураг сонгоно уу!');
        return;
    }
    
    // Clear previous uploads
    uploadedImages = [];
    previewContainer.innerHTML = '';
    
    Array.from(files).forEach((file, index) => {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            showToast('error', '⚠️ Зөвхөн зураг файл сонгоно уу!');
            return;
        }
        
        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
            showToast('error', '⚠️ ' + file.name + ' файл хэт том байна! (Max 5MB)');
            return;
        }
        
        // Create preview
        const reader = new FileReader();
        
        reader.onloadstart = () => {
            const loadingDiv = document.createElement('div');
            loadingDiv.className = 'preview-item';
            loadingDiv.id = 'preview-' + index;
            loadingDiv.innerHTML = '<div class="image-loading spinner">⏳</div>';
            previewContainer.appendChild(loadingDiv);
        };
        
        reader.onload = (e) => {
            const dataURL = e.target.result;
            uploadedImages.push(dataURL);
            
            const previewDiv = document.getElementById('preview-' + index);
            if (previewDiv) {
                previewDiv.innerHTML = `
                    <img src="${dataURL}" alt="Preview ${index + 1}">
                    <button class="remove-preview" onclick="removePreviewImage(${index})" type="button">×</button>
                    <div class="image-info">
                        ${file.name}<br>
                        <small>${formatFileSize(file.size)}</small>
                    </div>
                `;
            }
        };
        
        reader.onerror = () => {
            showToast('error', '❌ ' + file.name + ' уншихад алдаа гарлаа!');
        };
        
        reader.readAsDataURL(file);
    });
    
    // Clear URL input when files are uploaded
    document.getElementById('imageUrlsInput').value = '';
    showToast('success', '✅ ' + files.length + ' зураг амжилттай ачаалагдлаа!');
}

function removePreviewImage(index) {
    uploadedImages.splice(index, 1);
    
    // Rebuild preview
    const previewContainer = document.getElementById('imagePreview');
    previewContainer.innerHTML = '';
    
    uploadedImages.forEach((dataURL, i) => {
        const previewDiv = document.createElement('div');
        previewDiv.className = 'preview-item';
        previewDiv.innerHTML = `
            <img src="${dataURL}" alt="Preview ${i + 1}">
            <button class="remove-preview" onclick="removePreviewImage(${i})" type="button">×</button>
            <div class="image-info">Зураг ${i + 1}</div>
        `;
        previewContainer.appendChild(previewDiv);
    });
    
    showToast('info', '🗑️ Зураг устгагдлаа');
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// ============================================
// ADMIN PANEL
// ============================================

function checkAdminAccess() {
    if (currentUser && ADMIN_EMAILS.includes(currentUser.email)) {
        isAdmin = true;
        document.getElementById('adminAccessBtn').style.display = 'block';
    } else {
        isAdmin = false;
        document.getElementById('adminAccessBtn').style.display = 'none';
    }
}

function initializeAdmin() {
    // Admin tab switching
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            
            const tabName = e.target.dataset.tab;
            document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
            
            if (tabName === 'products') {
                document.getElementById('adminProducts').classList.add('active');
                loadAdminProducts();
            } else if (tabName === 'add-product') {
                document.getElementById('adminAddProduct').classList.add('active');
            } else if (tabName === 'orders') {
                document.getElementById('adminOrders').classList.add('active');
                loadAdminOrders();
            } else if (tabName === 'users') {
                document.getElementById('adminUsers').classList.add('active');
                loadAdminUsers();
            } else if (tabName === 'stats') {
                document.getElementById('adminStats').classList.add('active');
                loadAdminStats();
            }
        });
    });
    
    // Add product form
    document.getElementById('addProductForm').addEventListener('submit', handleAddProduct);
    
    // Admin filters
    document.getElementById('adminCategoryFilter')?.addEventListener('change', loadAdminProducts);
    document.getElementById('adminSearchProduct')?.addEventListener('input', loadAdminProducts);
}

function openAdminPanel() {
    if (!isAdmin) {
        showToast('error', '🔒 Админ эрх шаардлагатай!');
        return;
    }
    
    loadAdminProducts();
    document.getElementById('adminModal').style.display = 'block';
}

function loadAdminProducts() {
    const container = document.getElementById('adminProductsList');
    const categoryFilter = document.getElementById('adminCategoryFilter')?.value || '';
    const searchQuery = document.getElementById('adminSearchProduct')?.value.toLowerCase() || '';
    
    let filtered = productsData.filter(p => {
        const matchesCategory = !categoryFilter || p.category === categoryFilter;
        const matchesSearch = !searchQuery || 
            p.name.toLowerCase().includes(searchQuery) ||
            p.name_jp.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📦</div>
                <p>Бараа олдсонгүй</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(product => `
        <div class="admin-product-item">
            <img src="${product.images[0]}" alt="${product.name}" class="admin-product-image">
            <div class="admin-product-info">
                <h4>${product.name}</h4>
                <p><strong>ID:</strong> ${product.id} | <strong>Ангилал:</strong> ${getCategoryName(product.category)}</p>
                <p><strong>Үнэ:</strong> ₮${product.price_tugrik.toLocaleString()} | <strong>Нөөц:</strong> ${product.stock}</p>
                <p><strong>Үнэлгээ:</strong> ${'⭐'.repeat(product.rating)} (${product.reviews_count})</p>
            </div>
            <div class="admin-product-actions">
                <button class="admin-btn edit" onclick="editProduct(${product.id})">✏️ Засах</button>
                <button class="admin-btn delete" onclick="deleteProduct(${product.id})">🗑️ Устгах</button>
            </div>
        </div>
    `).join('');
}

function handleAddProduct(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    // Get images from either uploaded files or URL input
    let images = [];
    if (uploadedImages.length > 0) {
        images = uploadedImages; // Use uploaded image data URLs
    } else {
        const imageUrls = formData.get('images');
        if (imageUrls && imageUrls.trim()) {
            images = imageUrls.split(',').map(url => url.trim()).filter(url => url);
        }
    }
    
    if (images.length === 0) {
        showToast('error', '⚠️ Дор хаяж 1 зураг оруулна уу!');
        return;
    }
    
    const newProduct = {
        id: productsData.length > 0 ? Math.max(...productsData.map(p => p.id)) + 1 : 1,
        name: formData.get('name'),
        name_jp: formData.get('name_jp'),
        category: formData.get('category'),
        description: formData.get('description'),
        price_tugrik: parseInt(formData.get('price_tugrik')),
        price_yen: parseInt(formData.get('price_yen')),
        old_price: parseInt(formData.get('old_price')) || parseInt(formData.get('price_tugrik')) * 1.3,
        stock: parseInt(formData.get('stock')),
        condition: formData.get('condition'),
        location: formData.get('location'),
        images: images,
        rating: parseInt(formData.get('rating')),
        reviews_count: 0,
        badge: formData.get('badge'),
        discount_percent: parseInt(formData.get('discount_percent')) || 0
    };
    
    productsData.push(newProduct);
    showToast('success', '✅ Шинэ бараа амжилттай нэмэгдлээ!');
    
    // Reset form and uploaded images
    e.target.reset();
    uploadedImages = [];
    document.getElementById('imagePreview').innerHTML = '';
    document.getElementById('productImages').value = '';
    
    // Switch to products tab
    document.querySelector('[data-tab="products"]').click();
    
    // Reload products on main page
    loadProducts();
    
    // Save to localStorage for persistence
    localStorage.setItem('japanProducts', JSON.stringify(productsData));
}

function editProduct(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    // Switch to add product tab and fill form
    document.querySelector('[data-tab="add-product"]').click();
    
    const form = document.getElementById('addProductForm');
    form.querySelector('[name="name"]').value = product.name;
    form.querySelector('[name="name_jp"]').value = product.name_jp;
    form.querySelector('[name="category"]').value = product.category;
    form.querySelector('[name="description"]').value = product.description;
    form.querySelector('[name="price_tugrik"]').value = product.price_tugrik;
    form.querySelector('[name="price_yen"]').value = product.price_yen;
    form.querySelector('[name="old_price"]').value = product.old_price;
    form.querySelector('[name="stock"]').value = product.stock;
    form.querySelector('[name="condition"]').value = product.condition;
    form.querySelector('[name="location"]').value = product.location;
    form.querySelector('[name="rating"]').value = product.rating;
    form.querySelector('[name="discount_percent"]').value = product.discount_percent;
    form.querySelector('[name="badge"]').value = product.badge;
    form.querySelector('[name="images"]').value = product.images.join(', ');
    
    // Change button text
    const submitBtn = form.querySelector('.admin-submit-btn');
    submitBtn.textContent = '💾 ӨӨРЧЛӨЛТ ХАДГАЛАХ';
    submitBtn.onclick = () => updateProduct(productId);
    
    showToast('info', 'ℹ️ Бараа засах горимд орлоо');
}

function updateProduct(productId) {
    const form = document.getElementById('addProductForm');
    const formData = new FormData(form);
    const images = formData.get('images').split(',').map(url => url.trim());
    
    const index = productsData.findIndex(p => p.id === productId);
    if (index === -1) return;
    
    productsData[index] = {
        ...productsData[index],
        name: formData.get('name'),
        name_jp: formData.get('name_jp'),
        category: formData.get('category'),
        description: formData.get('description'),
        price_tugrik: parseInt(formData.get('price_tugrik')),
        price_yen: parseInt(formData.get('price_yen')),
        old_price: parseInt(formData.get('old_price')),
        stock: parseInt(formData.get('stock')),
        condition: formData.get('condition'),
        location: formData.get('location'),
        images: images,
        rating: parseInt(formData.get('rating')),
        badge: formData.get('badge'),
        discount_percent: parseInt(formData.get('discount_percent'))
    };
    
    showToast('success', '✅ Бараа амжилттай засагдлаа!');
    
    // Reset form
    form.reset();
    const submitBtn = form.querySelector('.admin-submit-btn');
    submitBtn.textContent = '✅ БАРАА НЭМЭХ';
    submitBtn.onclick = null;
    
    // Switch to products tab
    document.querySelector('[data-tab="products"]').click();
    
    // Reload products
    loadProducts();
    localStorage.setItem('japanProducts', JSON.stringify(productsData));
}

function deleteProduct(productId) {
    showCustomAlert({
        icon: '⚠️',
        title: 'Бараа устгах уу?',
        message: 'Энэ бараагаа бүрмөсөн устгах уу? Энэ үйлдлийг буцаах боломжгүй.',
        confirmText: 'Тийм, устгах',
        cancelText: 'Үгүй',
        onConfirm: () => {
            const index = productsData.findIndex(p => p.id === productId);
            if (index === -1) return;
            
            productsData.splice(index, 1);
            showToast('success', '🗑️ Бараа устгагдлаа');
            
            loadAdminProducts();
            loadProducts();
            localStorage.setItem('japanProducts', JSON.stringify(productsData));
        }
    });
}

function loadAdminOrders() {
    const container = document.getElementById('adminOrdersList');
    
    if (userOrders.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <p>Захиалга байхгүй</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = userOrders.map(order => `
        <div class="admin-order-item">
            <div class="admin-order-header">
                <h4>Захиалга #${order.orderNumber}</h4>
                <span class="admin-order-status ${order.status}">${getOrderStatusText(order.status)}</span>
            </div>
            <div class="admin-order-details">
                <p><strong>Огноо:</strong> ${order.date}</p>
                <p><strong>Бараа:</strong> ${order.items.length} ширхэг</p>
                <p><strong>Төлбөр:</strong> ${order.paymentMethod}</p>
                <p><strong>Нийт:</strong> ₮${order.total.toLocaleString()}</p>
            </div>
            <div style="margin-top: 1rem;">
                <button class="admin-btn edit" onclick="changeOrderStatus('${order.orderNumber}', 'shipped')">📦 Илгээсэн</button>
                <button class="admin-btn" onclick="changeOrderStatus('${order.orderNumber}', 'delivered')" style="background:#00b894;">✅ Хүргэсэн</button>
            </div>
        </div>
    `).join('');
}

function changeOrderStatus(orderNumber, newStatus) {
    const order = userOrders.find(o => o.orderNumber === orderNumber);
    if (!order) return;
    
    order.status = newStatus;
    localStorage.setItem('japanOrders', JSON.stringify(userOrders));
    
    showToast('success', '✅ Захиалгын статус: ' + getOrderStatusText(newStatus));
    loadAdminOrders();
}

function loadAdminUsers() {
    const container = document.getElementById('adminUsersList');
    
    const users = currentUser ? [currentUser] : [];
    
    if (users.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">👥</div>
                <p>Хэрэглэгч байхгүй</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = users.map((user, index) => `
        <div class="admin-user-item">
            <img src="https://i.pravatar.cc/100?img=${68 + index}" alt="User" class="admin-user-avatar">
            <div class="admin-user-info">
                <h4>${user.name}</h4>
                <p>📧 ${user.email}</p>
                <p>📱 ${user.phone || 'Утас байхгүй'}</p>
                <p>📍 ${user.address || 'Хаяг байхгүй'}</p>
            </div>
        </div>
    `).join('');
}

function loadAdminStats() {
    const totalProducts = productsData.length;
    const totalOrders = userOrders.length;
    const totalRevenue = userOrders.reduce((sum, order) => sum + order.total, 0);
    
    document.getElementById('totalProducts').textContent = totalProducts;
    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('totalRevenue').textContent = '₮' + totalRevenue.toLocaleString();
    
    // Simple chart with text (in production, use Chart.js)
    const chartContainer = document.getElementById('salesChart');
    if (chartContainer) {
        const days = ['Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба', 'Ням'];
        const sales = [12, 19, 15, 25, 22, 30, 28]; // Sample data
        
        chartContainer.innerHTML = `
            <div style="display: flex; justify-content: space-around; align-items: flex-end; height: 200px;">
                ${days.map((day, i) => `
                    <div style="text-align: center;">
                        <div style="background: #6c5ce7; width: 40px; height: ${sales[i] * 5}px; border-radius: 5px; margin-bottom: 10px;"></div>
                        <div style="font-size: 0.8rem; color: #7f8c8d;">${day}</div>
                        <div style="font-weight: 600; color: var(--text-dark);">${sales[i]}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Update login to check admin
const originalHandleLogin = handleLogin;
handleLogin = function(e) {
    originalHandleLogin(e);
    checkAdminAccess();
};

const originalHandleRegister = handleRegister;
handleRegister = function(e) {
    originalHandleRegister(e);
    checkAdminAccess();
};

const originalLogout = logout;
logout = function() {
    originalLogout();
    checkAdminAccess();
};

// ============================================
// PROFILE MANAGEMENT
// ============================================

function saveProfile(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const interests = Array.from(e.target.querySelectorAll('input[name="interest"]:checked'))
        .map(input => input.value);
    
    // Update current user
    currentUser = {
        ...currentUser,
        name: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        birthdate: formData.get('birthdate'),
        city: formData.get('city'),
        district: formData.get('district'),
        address: formData.get('address'),
        address2: formData.get('address2'),
        interests: interests
    };
    
    localStorage.setItem('japanUser', JSON.stringify(currentUser));
    updateUserUI();
    
    // Update profile display
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userEmail').textContent = currentUser.email;
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    
    showToast('success', '✅ Хувийн мэдээлэл амжилттай хадгалагдлаа!');
}

function resetProfile() {
    showCustomAlert({
        icon: '🔄',
        title: 'Өөрчлөлт буцаах уу?',
        message: 'Таны оруулсан бүх өөрчлөлтүүдийг буцаах уу?',
        confirmText: 'Тийм, буцаах',
        cancelText: 'Үгүй',
        onConfirm: () => {
            // Reload the dashboard to reset form
            openDashboard();
            showToast('info', 'ℹ️ Өөрчлөлт буцаагдлаа');
        }
    });
}

function changeProfilePhoto() {
    const photos = [68, 12, 5, 33, 45, 50, 65, 70];
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    const newPhotoUrl = `https://i.pravatar.cc/150?img=${randomPhoto}`;
    
    document.getElementById('profilePhoto').src = newPhotoUrl;
    
    if (currentUser) {
        currentUser.photoUrl = newPhotoUrl;
        localStorage.setItem('japanUser', JSON.stringify(currentUser));
    }
    
    showToast('success', '📷 Зураг солигдлоо!');
}

function changePassword() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content password-modal">
            <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>🔑 Нууц үг солих</h2>
            <form onsubmit="submitPasswordChange(event)">
                <div class="form-group">
                    <label>Одоогийн нууц үг</label>
                    <input type="password" name="currentPassword" required>
                </div>
                <div class="form-group">
                    <label>Шинэ нууц үг</label>
                    <input type="password" name="newPassword" required minlength="6">
                </div>
                <div class="form-group">
                    <label>Шинэ нууц үг давтах</label>
                    <input type="password" name="confirmPassword" required minlength="6">
                </div>
                <button type="submit" class="btn-primary" style="width:100%;">🔐 НУУЦ ҮГ СОЛИХ</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function submitPasswordChange(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newPassword = formData.get('newPassword');
    const confirmPassword = formData.get('confirmPassword');
    
    if (newPassword !== confirmPassword) {
        showToast('error', '❌ Нууц үг таарахгүй байна!');
        return;
    }
    
    if (newPassword.length < 6) {
        showToast('error', '❌ Нууц үг 6-аас дээш тэмдэгт байх ёстой!');
        return;
    }
    
    // In production, this should call backend API
    showToast('success', '✅ Нууц үг амжилттай солигдлоо!');
    
    // Close modal
    e.target.closest('.modal').remove();
}

function viewLoginHistory() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>👁️ Нэвтрэх түүх</h2>
            <div style="max-height: 400px; overflow-y: auto;">
                <div style="padding: 1rem; background: var(--light-bg); border-radius: var(--border-radius); margin-bottom: 0.5rem;">
                    <strong>🌐 Chrome on Windows</strong>
                    <p style="color: #7f8c8d; margin: 0.3rem 0;">📍 Улаанбаатар, Монгол</p>
                    <p style="color: #7f8c8d; margin: 0;">⏰ Өнөөдөр 14:30</p>
                </div>
                <div style="padding: 1rem; background: var(--light-bg); border-radius: var(--border-radius); margin-bottom: 0.5rem;">
                    <strong>📱 Safari on iPhone</strong>
                    <p style="color: #7f8c8d; margin: 0.3rem 0;">📍 Улаанбаатар, Монгол</p>
                    <p style="color: #7f8c8d; margin: 0;">⏰ Өчигдөр 09:15</p>
                </div>
                <div style="padding: 1rem; background: var(--light-bg); border-radius: var(--border-radius);">
                    <strong>🌐 Firefox on Windows</strong>
                    <p style="color: #7f8c8d; margin: 0.3rem 0;">📍 Дархан, Монгол</p>
                    <p style="color: #7f8c8d; margin: 0;">⏰ 3 хоногийн өмнө</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// ADDRESS MANAGEMENT
// ============================================

function editAddress(index) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width:600px;">
            <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>✏️ Хаяг засах</h2>
            <form onsubmit="saveAddress(event, ${index})">
                <div class="form-group">
                    <label>Хаягийн төрөл *</label>
                    <select name="addressType" required>
                        <option value="home">🏠 Гэр</option>
                        <option value="work">💼 Ажлын газар</option>
                        <option value="other">📍 Бусад</option>
                    </select>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                    <div class="form-group">
                        <label>Хүлээн авагчийн нэр *</label>
                        <input type="text" name="receiverName" value="Болд Б." required>
                    </div>
                    <div class="form-group">
                        <label>Утасны дугаар *</label>
                        <input type="tel" name="receiverPhone" value="+976 9999-9999" required>
                    </div>
                </div>
                <div class="form-group">
                    <label>Хот/Аймаг *</label>
                    <select name="city" required>
                        <option value="УБ">Улаанбаатар</option>
                        <option value="Дархан">Дархан</option>
                        <option value="Эрдэнэт">Эрдэнэт</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Дүүрэг/Сум *</label>
                    <select name="district" required>
                        <option value="СБД">Сүхбаатар</option>
                        <option value="БГД">Баянгол</option>
                        <option value="ХУД">Хан-Уул</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Дэлгэрэнгүй хаяг *</label>
                    <textarea name="detailAddress" required rows="3" placeholder="Хороо, байр, тоот...">3-р хороо, 15-р байр</textarea>
                </div>
                <div class="form-group">
                    <label style="display:flex;align-items:center;gap:0.5rem;">
                        <input type="checkbox" name="isDefault" checked>
                        <span>Үндсэн хаяг болгох</span>
                    </label>
                </div>
                <div style="display:flex;gap:1rem;margin-top:1.5rem;">
                    <button type="button" onclick="this.closest('.modal').remove()" class="btn-secondary" style="flex:1;">Болих</button>
                    <button type="submit" class="btn-primary" style="flex:1;">💾 Хадгалах</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function deleteAddress(index) {
    showCustomAlert({
        icon: '❓',
        title: 'Хаяг устгах уу?',
        message: 'Энэ хаягийг устгахдаа итгэлтэй байна уу?',
        confirmText: 'Тийм, устгах',
        cancelText: 'Үгүй',
        onConfirm: () => {
            showToast('success', '🗑️ Хаяг устгагдлаа!');
            // Here you would remove from localStorage/database
        }
    });
}

function openAddAddressModal() {
    editAddress(-1); // -1 means new address
}

function saveAddress(e, index) {
    e.preventDefault();
    showToast('success', '✅ Хаяг амжилттай хадгалагдлаа!');
    e.target.closest('.modal').remove();
    // Here you would save to localStorage/database
}

// REWARD POINTS
// ============================================

function showPointsHistory() {
    const history = [
        { date: '2024-10-20', action: 'Захиалга #12345', points: '+125', type: 'earn' },
        { date: '2024-10-18', action: 'Хямдралд ашигласан', points: '-200', type: 'use' },
        { date: '2024-10-15', action: 'Захиалга #12344', points: '+100', type: 'earn' },
        { date: '2024-10-10', action: 'Төрсөн өдрийн бонус', points: '+500', type: 'bonus' },
        { date: '2024-10-05', action: 'Найз урьсан', points: '+150', type: 'referral' }
    ];
    
    let historyHtml = '<h2>📊 Оноо түүх</h2><div style="max-height:400px;overflow:auto;margin:1rem 0;">';
    
    history.forEach(item => {
        const typeIcon = {
            'earn': '💰',
            'use': '🎁',
            'bonus': '🎉',
            'referral': '🤝'
        };
        const pointsColor = item.points.startsWith('+') ? '#28a745' : '#dc3545';
        
        historyHtml += `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:1rem;background:#f8f9fa;border-radius:8px;margin-bottom:0.5rem;">
                <div>
                    <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">
                        <span>${typeIcon[item.type]}</span>
                        <strong>${item.action}</strong>
                    </div>
                    <small style="color:#666;">${item.date}</small>
                </div>
                <div style="font-size:1.25rem;font-weight:700;color:${pointsColor};">
                    ${item.points}
                </div>
            </div>
        `;
    });
    
    historyHtml += `
        </div>
        <div style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);color:white;padding:1.5rem;border-radius:12px;text-align:center;margin-bottom:1rem;">
            <div style="font-size:0.9rem;opacity:0.9;margin-bottom:0.5rem;">Нийт оноо</div>
            <div style="font-size:2.5rem;font-weight:700;">2,450</div>
            <div style="font-size:0.9rem;opacity:0.9;margin-top:0.5rem;">≈ 24,500₮ хөнгөлөлт</div>
        </div>
    `;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width:600px;">
            <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
            ${historyHtml}
            <button onclick="this.closest('.modal').remove()" class="btn-secondary" style="width:100%;">Хаах</button>
        </div>
    `;
    document.body.appendChild(modal);
}