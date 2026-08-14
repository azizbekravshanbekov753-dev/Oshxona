// ===== FOYDALANUVCHILAR =====
const USERS = {
    waiter: {
        username: 'afisant',
        password: 'afisant123',
        role: 'waiter',
        name: 'Jasur Ofitsiant',
        avatar: '🧑‍💼'
    },
    chef: {
        username: 'oshpaz',
        password: 'oshpaz123',
        role: 'chef',
        name: 'Bobur Oshpaz',
        avatar: '👨‍🍳'
    },
    admin: {
        username: 'admin',
        password: 'admin123',
        role: 'admin',
        name: 'Abdulla Admin',
        avatar: '👤'
    }
};

// ===== MENYU =====
const DEFAULT_MENU = [
    { id: 1, name: "Osh (Palov)", emoji: "🍚", price: 25000, category: "Asosiy taomlar", active: true },
    { id: 2, name: "Shashlik", emoji: "🍢", price: 35000, category: "Asosiy taomlar", active: true },
    { id: 3, name: "Norin", emoji: "🍜", price: 20000, category: "Asosiy taomlar", active: true },
    { id: 4, name: "Lag'mon", emoji: "🍝", price: 22000, category: "Asosiy taomlar", active: true },
    { id: 5, name: "Manti", emoji: "🥟", price: 18000, category: "Asosiy taomlar", active: true },
    { id: 6, name: "Dimlama", emoji: "🥘", price: 28000, category: "Asosiy taomlar", active: true },
    { id: 7, name: "So'rpa", emoji: "🍵", price: 15000, category: "Sho'rvalar", active: true },
    { id: 8, name: "Mastava", emoji: "🥣", price: 16000, category: "Sho'rvalar", active: true },
    { id: 9, name: "Mosho'rva", emoji: "🫕", price: 14000, category: "Sho'rvalar", active: true },
    { id: 10, name: "Achichuk Salat", emoji: "🥗", price: 10000, category: "Salatlar", active: true },
    { id: 11, name: "Toshkent Salati", emoji: "🥙", price: 12000, category: "Salatlar", active: true },
    { id: 12, name: "Choy (Qora)", emoji: "🍵", price: 5000, category: "Ichimliklar", active: true },
    { id: 13, name: "Choy (Ko'k)", emoji: "🍃", price: 5000, category: "Ichimliklar", active: true },
    { id: 14, name: "Pepsi / Coca-Cola", emoji: "🥤", price: 8000, category: "Ichimliklar", active: true },
    { id: 15, name: "Mineral suv", emoji: "💧", price: 4000, category: "Ichimliklar", active: true },
    { id: 16, name: "Non", emoji: "🫓", price: 3000, category: "Boshqalar", active: true },
    { id: 17, name: "Somsa", emoji: "🥐", price: 6000, category: "Boshqalar", active: true },
    { id: 18, name: "Cake", emoji: "🎂", price: 20000, category: "Desertlar", active: true },
    { id: 19, name: "Qimiz", emoji: "🥛", price: 10000, category: "Ichimliklar", active: true },
    { id: 20, name: "Sharbat", emoji: "🧃", price: 7000, category: "Ichimliklar", active: true },
];

// ===== STORAGE YORDAM FUNKSIYALAR =====
function getMenu() {
    const saved = localStorage.getItem('restoran_menu');
    return saved ? JSON.parse(saved) : DEFAULT_MENU;
}

function saveMenu(menu) {
    localStorage.setItem('restoran_menu', JSON.stringify(menu));
}

function getOrders() {
    const saved = localStorage.getItem('restoran_orders');
    return saved ? JSON.parse(saved) : [];
}

function saveOrders(orders) {
    localStorage.setItem('restoran_orders', JSON.stringify(orders));
}

function getNotifications() {
    const saved = localStorage.getItem('restoran_notifications');
    return saved ? JSON.parse(saved) : [];
}

function saveNotifications(notifs) {
    localStorage.setItem('restoran_notifications', JSON.stringify(notifs));
}

function addNotification(role, title, text, orderId = null) {
    const notifs = getNotifications();
    notifs.unshift({
        id: Date.now(),
        role,
        title,
        text,
        orderId,
        time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' }),
        read: false
    });
    saveNotifications(notifs);
}

function getCurrentUser() {
    const saved = sessionStorage.getItem('restoran_user');
    return saved ? JSON.parse(saved) : null;
}

function setCurrentUser(user) {
    sessionStorage.setItem('restoran_user', JSON.stringify(user));
}

function logout() {
    sessionStorage.removeItem('restoran_user');
    window.location.href = 'index.html';
}

function formatPrice(price) {
    return price.toLocaleString('uz-UZ') + " so'm";
}

function generateOrderId() {
    const orders = getOrders();
    return '#' + String(orders.length + 1).padStart(4, '0');
}
