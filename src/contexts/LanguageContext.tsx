
import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'ms' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Login Page
    welcomeToNiagaNow: "Welcome to NiagaNow",
    secureBanking: "Your secure banking platform",
    login: "Login",
    signup: "Sign Up",
    emailAddress: "Email Address",
    enterEmail: "Enter your email",
    password: "Password",
    enterPassword: "Enter your password",
    forgotPassword: "Forgot password?",
    signIn: "Sign In",
    createAccount: "Create Account",
    fullName: "Full Name",
    enterFullName: "Enter your full name",
    gender: "Gender",
    selectGender: "Select your gender",
    male: "Male",
    female: "Female",
    other: "Other",
    businessName: "Business Name",
    enterBusinessName: "Enter your business name",
    phoneNumber: "Phone Number",
    enterPhoneNumber: "Enter your phone number",
    icNumber: "IC Number (MyKad)",
    enterIcNumber: "Enter your IC number",
    businessRegNumber: "Business Registration Number",
    enterBusinessRegNumber: "Enter your business registration number",
    testCredentials: "Test credentials: test@gmail.com / 12345678Maxins*",
    testData: "Test data: Phone: 0123456789, Business Reg: 0123456789123",
    protectedBySecurity: "Protected by bank-level security. Your data is encrypted and safe.",
    
    // Dashboard
    dashboard: "Dashboard",
    welcomeBack: "Welcome back, Mary! Here's your business overview.",
    qrPayment: "QR Payment",
    loans: "Loans",
    transactionHistory: "Transaction History",
    profile: "Profile",
    logOut: "Log Out",
    notifications: "Notifications",
    incomeOverview: "Income Overview",
    trackIncome: "Track your business income performance",
    daily: "Daily",
    weekly: "Weekly",
    monthly: "Monthly",
    currentIncome: "Current {period} income",
    previousIncome: "Previous {period}",
    peakTransactionTimes: "Peak Transaction Times",
    whenCustomersBuy: "When customers buy your products most",
    
    // QR Payment
    shareQrCode: "Share your QR code with customers to receive payments",
    nyonyaKuih: "Mary's Nyonya Kuih",
    traditionalKuih: "Traditional Kuih & Desserts",
    scanQrCode: "Scan this QR code to pay Mary's Nyonya Kuih",
    paymentInformation: "Payment Information",
    businessNameLabel: "Business Name:",
    owner: "Owner:",
    businessType: "Business Type:",
    paymentMethod: "Payment Method:",
    howToUse: "How to Use",
    step1: "Customer opens their banking app",
    step2: "They scan your QR code",
    step3: "They enter the payment amount",
    step4: "Payment is completed instantly",
    downloadQr: "Download QR",
    shareQr: "Share QR",
    
    // Loans
    exploreLoans: "Explore our loan options to grow your business",
    checkEligibility: "Check Your Loan Eligibility",
    quickAssessment: "Complete our quick assessment to see if you qualify for a business loan",
    startEligibilityCheck: "Start Eligibility Check",
    smeWorkingCapital: "SME Working Capital Loan",
    workingCapitalDesc: "Quick access to working capital for daily operations",
    equipmentFinancing: "Equipment Financing",
    equipmentFinancingDesc: "Finance new equipment to grow your business",
    businessExpansion: "Business Expansion Loan",
    businessExpansionDesc: "Fund your business expansion plans",
    interestRate: "Interest Rate:",
    maxAmount: "Max Amount:",
    tenure: "Tenure:",
    keyFeatures: "Key Features:",
    applyNow: "Apply Now",
    whyChooseNiagaNow: "Why Choose NiagaNow Business Loans?",
    quickProcessing: "Quick Processing",
    quickProcessingDesc: "Get approval within 24-48 hours with minimal documentation",
    flexibleTerms: "Flexible Terms",
    flexibleTermsDesc: "Customized repayment plans to suit your business cash flow",
    expertSupport: "Expert Support",
    expertSupportDesc: "Dedicated relationship managers to guide you through the process",
    
    // Transaction History
    viewTransactions: "View and manage your transaction history",
    exportPdf: "Export PDF",
    selectMonth: "Select Month",
    selectYear: "Select Year",
    transactionId: "Transaction ID",
    date: "Date",
    description: "Description",
    amount: "Amount",
    status: "Status",
    completed: "Completed",
    pending: "Pending",
    failed: "Failed",
    
    // Profile
    personalInformation: "Personal Information",
    manageProfile: "Manage your personal and business information",
    save: "Save",
    businessInformation: "Business Information",
    
    // Common
    digitalBanking: "Digital Banking",
    home: "Home",
    mary: "Mary",
    nyonyaKuihSeller: "Nyonya Kuih Seller",
    maryLim: "Mary Lim",
    foodBeverage: "Food & Beverage",
    duitnowQr: "DuitNow QR",
    
    // Language selector
    language: "Language",
    english: "English",
    malay: "Bahasa Malaysia",
    mandarin: "中文"
  },
  ms: {
    // Login Page
    welcomeToNiagaNow: "Selamat Datang ke NiagaNow",
    secureBinding: "Platform perbankan selamat anda",
    login: "Log Masuk",
    signup: "Daftar",
    emailAddress: "Alamat E-mel",
    enterEmail: "Masukkan e-mel anda",
    password: "Kata Laluan",
    enterPassword: "Masukkan kata laluan anda",
    forgotPassword: "Lupa kata laluan?",
    signIn: "Log Masuk",
    createAccount: "Buat Akaun",
    fullName: "Nama Penuh",
    enterFullName: "Masukkan nama penuh anda",
    gender: "Jantina",
    selectGender: "Pilih jantina anda",
    male: "Lelaki",
    female: "Perempuan",
    other: "Lain-lain",
    businessName: "Nama Perniagaan",
    enterBusinessName: "Masukkan nama perniagaan anda",
    phoneNumber: "Nombor Telefon",
    enterPhoneNumber: "Masukkan nombor telefon anda",
    icNumber: "Nombor IC (MyKad)",
    enterIcNumber: "Masukkan nombor IC anda",
    businessRegNumber: "Nombor Pendaftaran Perniagaan",
    enterBusinessRegNumber: "Masukkan nombor pendaftaran perniagaan anda",
    testCredentials: "Kelayakan ujian: test@gmail.com / 12345678Maxins*",
    testData: "Data ujian: Telefon: 0123456789, Pendaftaran Perniagaan: 0123456789123",
    protectedBySecurity: "Dilindungi oleh keselamatan tahap bank. Data anda disulitkan dan selamat.",
    
    // Dashboard
    dashboard: "Papan Pemuka",
    welcomeBack: "Selamat kembali, Mary! Berikut adalah gambaran keseluruhan perniagaan anda.",
    qrPayment: "Pembayaran QR",
    loans: "Pinjaman",
    transactionHistory: "Sejarah Transaksi",
    profile: "Profail",
    logOut: "Log Keluar",
    notifications: "Pemberitahuan",
    incomeOverview: "Gambaran Keseluruhan Pendapatan",
    trackIncome: "Jejaki prestasi pendapatan perniagaan anda",
    daily: "Harian",
    weekly: "Mingguan",
    monthly: "Bulanan",
    currentIncome: "Pendapatan {period} semasa",
    previousIncome: "{period} sebelumnya",
    peakTransactionTimes: "Masa Transaksi Puncak",
    whenCustomersBuy: "Bila pelanggan paling banyak membeli produk anda",
    
    // QR Payment
    shareQrCode: "Kongsi kod QR anda dengan pelanggan untuk menerima pembayaran",
    nyonyaKuih: "Kuih Nyonya Mary",
    traditionalKuih: "Kuih & Pencuci Mulut Tradisional",
    scanQrCode: "Imbas kod QR ini untuk membayar Kuih Nyonya Mary",
    paymentInformation: "Maklumat Pembayaran",
    businessNameLabel: "Nama Perniagaan:",
    owner: "Pemilik:",
    businessType: "Jenis Perniagaan:",
    paymentMethod: "Kaedah Pembayaran:",
    howToUse: "Cara Menggunakan",
    step1: "Pelanggan membuka aplikasi perbankan mereka",
    step2: "Mereka mengimbas kod QR anda",
    step3: "Mereka memasukkan jumlah pembayaran",
    step4: "Pembayaran selesai dengan serta-merta",
    downloadQr: "Muat Turun QR",
    shareQr: "Kongsi QR",
    
    // Loans
    exploreLoans: "Terokai pilihan pinjaman kami untuk mengembangkan perniagaan anda",
    checkEligibility: "Semak Kelayakan Pinjaman Anda",
    quickAssessment: "Lengkapkan penilaian pantas kami untuk melihat sama ada anda layak untuk pinjaman perniagaan",
    startEligibilityCheck: "Mulakan Semakan Kelayakan",
    smeWorkingCapital: "Pinjaman Modal Kerja PKS",
    workingCapitalDesc: "Akses pantas kepada modal kerja untuk operasi harian",
    equipmentFinancing: "Pembiayaan Peralatan",
    equipmentFinancingDesc: "Biayai peralatan baru untuk mengembangkan perniagaan anda",
    businessExpansion: "Pinjaman Pengembangan Perniagaan",
    businessExpansionDesc: "Biayai rancangan pengembangan perniagaan anda",
    interestRate: "Kadar Faedah:",
    maxAmount: "Jumlah Maksimum:",
    tenure: "Tempoh:",
    keyFeatures: "Ciri-ciri Utama:",
    applyNow: "Mohon Sekarang",
    whyChooseNiagaNow: "Mengapa Pilih Pinjaman Perniagaan NiagaNow?",
    quickProcessing: "Pemprosesan Pantas",
    quickProcessingDesc: "Dapatkan kelulusan dalam 24-48 jam dengan dokumentasi minimum",
    flexibleTerms: "Terma Fleksibel",
    flexibleTermsDesc: "Pelan pembayaran balik yang disesuaikan mengikut aliran tunai perniagaan anda",
    expertSupport: "Sokongan Pakar",
    expertSupportDesc: "Pengurus perhubungan khusus untuk membimbing anda melalui proses",
    
    // Transaction History
    viewTransactions: "Lihat dan urus sejarah transaksi anda",
    exportPdf: "Eksport PDF",
    selectMonth: "Pilih Bulan",
    selectYear: "Pilih Tahun",
    transactionId: "ID Transaksi",
    date: "Tarikh",
    description: "Penerangan",
    amount: "Jumlah",
    status: "Status",
    completed: "Selesai",
    pending: "Dalam Proses",
    failed: "Gagal",
    
    // Profile
    personalInformation: "Maklumat Peribadi",
    manageProfile: "Urus maklumat peribadi dan perniagaan anda",
    save: "Simpan",
    businessInformation: "Maklumat Perniagaan",
    
    // Common
    digitalBanking: "Perbankan Digital",
    home: "Utama",
    mary: "Mary",
    nyonyaKuihSeller: "Penjual Kuih Nyonya",
    maryLim: "Mary Lim",
    foodBeverage: "Makanan & Minuman",
    duitnowQr: "DuitNow QR",
    
    // Language selector
    language: "Bahasa",
    english: "English",
    malay: "Bahasa Malaysia",
    mandarin: "中文"
  },
  zh: {
    // Login Page
    welcomeToNiagaNow: "欢迎来到NiagaNow",
    secureBinding: "您的安全银行平台",
    login: "登录",
    signup: "注册",
    emailAddress: "电子邮件地址",
    enterEmail: "输入您的电子邮件",
    password: "密码",
    enterPassword: "输入您的密码",
    forgotPassword: "忘记密码？",
    signIn: "登录",
    createAccount: "创建账户",
    fullName: "全名",
    enterFullName: "输入您的全名",
    gender: "性别",
    selectGender: "选择您的性别",
    male: "男性",
    female: "女性",
    other: "其他",
    businessName: "企业名称",
    enterBusinessName: "输入您的企业名称",
    phoneNumber: "电话号码",
    enterPhoneNumber: "输入您的电话号码",
    icNumber: "身份证号码 (MyKad)",
    enterIcNumber: "输入您的身份证号码",
    businessRegNumber: "企业注册号码",
    enterBusinessRegNumber: "输入您的企业注册号码",
    testCredentials: "测试凭证：test@gmail.com / 12345678Maxins*",
    testData: "测试数据：电话：0123456789，企业注册：0123456789123",
    protectedBySecurity: "受银行级安全保护。您的数据已加密且安全。",
    
    // Dashboard
    dashboard: "仪表板",
    welcomeBack: "欢迎回来，Mary！这是您的业务概览。",
    qrPayment: "二维码支付",
    loans: "贷款",
    transactionHistory: "交易历史",
    profile: "个人资料",
    logOut: "退出登录",
    notifications: "通知",
    incomeOverview: "收入概览",
    trackIncome: "跟踪您的业务收入表现",
    daily: "每日",
    weekly: "每周",
    monthly: "每月",
    currentIncome: "当前{period}收入",
    previousIncome: "之前{period}",
    peakTransactionTimes: "交易高峰时间",
    whenCustomersBuy: "客户最常购买您产品的时间",
    
    // QR Payment
    shareQrCode: "与客户分享您的二维码以接收付款",
    nyonyaKuih: "Mary的娘惹糕点",
    traditionalKuih: "传统糕点和甜品",
    scanQrCode: "扫描此二维码向Mary的娘惹糕点付款",
    paymentInformation: "付款信息",
    businessNameLabel: "企业名称：",
    owner: "所有者：",
    businessType: "业务类型：",
    paymentMethod: "付款方式：",
    howToUse: "使用方法",
    step1: "客户打开他们的银行应用",
    step2: "他们扫描您的二维码",
    step3: "他们输入付款金额",
    step4: "付款立即完成",
    downloadQr: "下载二维码",
    shareQr: "分享二维码",
    
    // Loans
    exploreLoans: "探索我们的贷款选项来发展您的业务",
    checkEligibility: "检查您的贷款资格",
    quickAssessment: "完成我们的快速评估，看看您是否符合商业贷款条件",
    startEligibilityCheck: "开始资格检查",
    smeWorkingCapital: "中小企业营运资金贷款",
    workingCapitalDesc: "快速获取日常运营的营运资金",
    equipmentFinancing: "设备融资",
    equipmentFinancingDesc: "为新设备提供资金以发展您的业务",
    businessExpansion: "业务扩展贷款",
    businessExpansionDesc: "为您的业务扩展计划提供资金",
    interestRate: "利率：",
    maxAmount: "最高金额：",
    tenure: "期限：",
    keyFeatures: "主要特点：",
    applyNow: "立即申请",
    whyChooseNiagaNow: "为什么选择NiagaNow商业贷款？",
    quickProcessing: "快速处理",
    quickProcessingDesc: "以最少的文件在24-48小时内获得批准",
    flexibleTerms: "灵活条款",
    flexibleTermsDesc: "根据您的业务现金流量定制还款计划",
    expertSupport: "专家支持",
    expertSupportDesc: "专门的客户经理指导您完成整个过程",
    
    // Transaction History
    viewTransactions: "查看和管理您的交易历史",
    exportPdf: "导出PDF",
    selectMonth: "选择月份",
    selectYear: "选择年份",
    transactionId: "交易ID",
    date: "日期",
    description: "描述",
    amount: "金额",
    status: "状态",
    completed: "已完成",
    pending: "待处理",
    failed: "失败",
    
    // Profile
    personalInformation: "个人信息",
    manageProfile: "管理您的个人和业务信息",
    save: "保存",
    businessInformation: "业务信息",
    
    // Common
    digitalBanking: "数字银行",
    home: "首页",
    mary: "Mary",
    nyonyaKuihSeller: "娘惹糕点销售商",
    maryLim: "Mary Lim",
    foodBeverage: "食品饮料",
    duitnowQr: "DuitNow QR",
    
    // Language selector
    language: "语言",
    english: "English",
    malay: "Bahasa Malaysia",
    mandarin: "中文"
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
