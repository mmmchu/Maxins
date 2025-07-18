import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  QrCode, 
  User, 
  LogOut,
  Bell,
  DollarSign,
  History,
  TrendingUp,
  Clock,
  Calendar,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const MerchantDashboard = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState("daily");

  const handleLogout = () => {
    navigate("/login");
  };

  const sidebarItems = [
    { icon: Home, label: t('dashboard'), active: true, path: "/merchant-dashboard" },
    { icon: QrCode, label: t('qrPayment'), path: "/qr-payment" },
    { icon: DollarSign, label: t('loans'), path: "/loans" },
    { icon: History, label: t('transactionHistory'), path: "/transaction-history" }
  ];

  const notifications = [
    {
      id: 1,
      message: "Your loan application is eligible!",
      type: "success"
    },
    {
      id: 2,
      message: "You are qualified for bank/NGO programs!",
      type: "success"
    },
    {
      id: 3,
      message: "Transaction today is RM1,245.25 today!",
      type: "info"
    }
  ];

  const incomeData = {
    daily: {
      current: 1245.25,
      previous: 1180.50,
      data: [
        { name: 'Mon', amount: 1200 },
        { name: 'Tue', amount: 1350 },
        { name: 'Wed', amount: 980 },
        { name: 'Thu', amount: 1245 },
        { name: 'Fri', amount: 1670 },
        { name: 'Sat', amount: 1890 },
        { name: 'Sun', amount: 1456 }
      ]
    },
    weekly: {
      current: 8745.75,
      previous: 8200.25,
      data: [
        { name: 'Week 1', amount: 8200 },
        { name: 'Week 2', amount: 8745 },
        { name: 'Week 3', amount: 9200 },
        { name: 'Week 4', amount: 8900 }
      ]
    },
    monthly: {
      current: 34985.50,
      previous: 32800.75,
      data: [
        { name: 'Jan', amount: 32800 },
        { name: 'Feb', amount: 34985 },
        { name: 'Mar', amount: 36200 },
        { name: 'Apr', amount: 35100 }
      ]
    }
  };

  const transactionTimeData = [
    { time: '8AM', transactions: 5 },
    { time: '9AM', transactions: 12 },
    { time: '10AM', transactions: 25 },
    { time: '11AM', transactions: 35 },
    { time: '12PM', transactions: 45 },
    { time: '1PM', transactions: 38 },
    { time: '2PM', transactions: 28 },
    { time: '3PM', transactions: 32 },
    { time: '4PM', transactions: 40 },
    { time: '5PM', transactions: 48 },
    { time: '6PM', transactions: 35 },
    { time: '7PM', transactions: 22 },
    { time: '8PM', transactions: 15 }
  ];

  const currentData = incomeData[selectedPeriod as keyof typeof incomeData];
  const percentageChange = ((currentData.current - currentData.previous) / currentData.previous * 100).toFixed(1);
  const isIncrease = currentData.current > currentData.previous;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-80 bg-card border-r border-border p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <img 
              src="/uploads/e71d6aef-f1e6-48ed-bcd4-abb4015452cb.png" 
              alt="NiagaNow" 
              className="w-8 h-8"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">NiagaNow</h2>
            <p className="text-sm text-muted-foreground">{t('digitalBanking')}</p>
          </div>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start h-12 ${
                item.active 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => item.path && navigate(item.path)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Button>
          ))}
        </nav>

        {/* User Profile Section */}
        <div className="mt-auto pt-6 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start p-0 h-auto mb-4"
            onClick={() => navigate("/profile")}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">{t('mary')}</p>
                <p className="text-sm text-muted-foreground">{t('nyonyaKuihSeller')}</p>
              </div>
            </div>
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:text-foreground"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-3" />
            {t('logOut')}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Language Selector and Notification Bell */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{t('dashboard')}</h1>
              <p className="text-muted-foreground">{t('welcomeBack')}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <LanguageSelector />
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Bell className="w-5 h-5" />
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                      {notifications.length}
                    </Badge>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="end">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">{t('notifications')}</h3>
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-3 rounded-lg ${
                          notification.type === 'success' 
                            ? 'bg-green-50 border border-green-200' 
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm text-foreground">{notification.message}</p>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Income Overview */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    {t('incomeOverview')}
                  </CardTitle>
                  <CardDescription>{t('trackIncome')}</CardDescription>
                </div>
                <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <TabsList>
                    <TabsTrigger value="daily">{t('daily')}</TabsTrigger>
                    <TabsTrigger value="weekly">{t('weekly')}</TabsTrigger>
                    <TabsTrigger value="monthly">{t('monthly')}</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t('currentIncome').replace('{period}', t(selectedPeriod))}
                      </p>
                      <p className="text-2xl font-bold text-foreground">RM {currentData.current.toLocaleString()}</p>
                    </div>
                    <div className={`flex items-center gap-1 ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
                      {isIncrease ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                      <span className="text-sm font-medium">{percentageChange}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t('previousIncome').replace('{period}', t(selectedPeriod))}: RM {currentData.previous.toLocaleString()}
                  </p>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={currentData.data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transaction Time Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {t('peakTransactionTimes')}
              </CardTitle>
              <CardDescription>{t('whenCustomersBuy')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={transactionTimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="transactions" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
