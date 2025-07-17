
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { 
  Home, 
  Building2, 
  CreditCard, 
  QrCode, 
  User, 
  Settings, 
  Menu,
  X,
  PiggyBank,
  TrendingUp,
  Send,
  ArrowDownRight,
  ArrowUpRight,
  Eye,
  EyeOff,
  LogOut,
  ShoppingBag,
  Clock,
  DollarSign
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const MerchantDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [incomeView, setIncomeView] = useState("daily");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const navigationItems = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Register Business", url: "/business", icon: Building2 },
    { title: "Add IC/MyKad", url: "/verification", icon: CreditCard },
    { title: "QR Payment", url: "/qr-payment", icon: QrCode },
    { title: "Profile", url: "/profile", icon: User },
    { title: "Settings", url: "/settings", icon: Settings },
  ];

  // Simulated data for Ms Mary's nyonya kuih business
  const incomeData = {
    daily: {
      total: "RM 245.50",
      data: [
        { time: "8 AM", amount: 25 },
        { time: "10 AM", amount: 45 },
        { time: "12 PM", amount: 65 },
        { time: "2 PM", amount: 55 },
        { time: "4 PM", amount: 35 },
        { time: "6 PM", amount: 20 },
      ]
    },
    weekly: {
      total: "RM 1,687.50",
      data: [
        { time: "Mon", amount: 245 },
        { time: "Tue", amount: 280 },
        { time: "Wed", amount: 195 },
        { time: "Thu", amount: 310 },
        { time: "Fri", amount: 275 },
        { time: "Sat", amount: 225 },
        { time: "Sun", amount: 157 },
      ]
    },
    monthly: {
      total: "RM 6,750.00",
      data: [
        { time: "Week 1", amount: 1687 },
        { time: "Week 2", amount: 1850 },
        { time: "Week 3", amount: 1425 },
        { time: "Week 4", amount: 1788 },
      ]
    }
  };

  const peakHoursData = [
    { hour: "8 AM", transactions: 12 },
    { hour: "10 AM", transactions: 25 },
    { hour: "12 PM", transactions: 45 },
    { hour: "2 PM", transactions: 38 },
    { hour: "4 PM", transactions: 28 },
    { hour: "6 PM", transactions: 15 },
  ];

  const topProducts = [
    { name: "Kuih Lapis", sales: 45, revenue: "RM 135.00", color: "#8B5CF6" },
    { name: "Onde-onde", sales: 38, revenue: "RM 76.00", color: "#06B6D4" },
    { name: "Kuih Seri Muka", sales: 32, revenue: "RM 128.00", color: "#10B981" },
    { name: "Kuih Talam", sales: 28, revenue: "RM 84.00", color: "#F59E0B" },
    { name: "Pulut Inti", sales: 22, revenue: "RM 88.00", color: "#EF4444" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const chartConfig = {
    amount: {
      label: "Amount (RM)",
      color: "hsl(var(--primary))",
    },
    transactions: {
      label: "Transactions",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-border bg-card">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-semibold">Merchant Dashboard</h1>
        <div className="w-10" />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform lg:transform-none
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <PiggyBank className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-bold text-foreground">NiagaNow</h2>
                  <p className="text-xs text-muted-foreground">Merchant Portal</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.url}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-all
                    ${isActive(item.url) 
                      ? 'bg-primary text-primary-foreground shadow-soft' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.title}</span>
                </NavLink>
              ))}
            </nav>

            {/* User Info & Logout */}
            <div className="p-4 border-t border-border space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  MM
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground truncate">Ms Mary</p>
                  <p className="text-xs text-muted-foreground truncate">Nyonya Kuih Seller</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="p-6 space-y-6">
            {/* Welcome Section */}
            <div className="space-y-2">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                Welcome back, Ms Mary! 🥮
              </h1>
              <p className="text-muted-foreground">
                Here's how your nyonya kuih business is performing today.
              </p>
            </div>

            {/* Income Overview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">Income Overview</h2>
                <Tabs value={incomeView} onValueChange={setIncomeView} className="w-auto">
                  <TabsList>
                    <TabsTrigger value="daily">Daily</TabsTrigger>
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {incomeView.charAt(0).toUpperCase() + incomeView.slice(1)} Income
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">
                      {incomeData[incomeView as keyof typeof incomeData].total}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      +12.5% from last {incomeView === 'daily' ? 'day' : incomeView === 'weekly' ? 'week' : 'month'}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Income Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={incomeData[incomeView as keyof typeof incomeData].data}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line 
                            type="monotone" 
                            dataKey="amount" 
                            stroke="hsl(var(--primary))" 
                            strokeWidth={2}
                            dot={{ fill: "hsl(var(--primary))" }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Peak Hours */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Peak Transaction Hours</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Busiest Hours Today
                  </CardTitle>
                  <CardDescription>
                    When your customers are most active
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={peakHoursData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar 
                          dataKey="transactions" 
                          fill="hsl(var(--primary))"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Top Selling Products */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Top Selling Products</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingBag className="h-5 w-5" />
                      Product Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topProducts.map((product, index) => (
                        <div key={product.name} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: product.color }}></div>
                            <div>
                              <p className="font-medium text-sm">{product.name}</p>
                              <p className="text-xs text-muted-foreground">{product.sales} sold</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-sm">{product.revenue}</p>
                            <Badge variant="outline" className="text-xs">
                              #{index + 1}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sales Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={topProducts}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="sales"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {topProducts.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MerchantDashboard;
