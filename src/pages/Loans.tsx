
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
  CreditCard,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";

const Loans = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/merchant-dashboard" },
    { icon: QrCode, label: "QR Payment", path: "/qr-payment" },
    { icon: DollarSign, label: "Loans", active: true, path: "/loans" },
    { icon: History, label: "Transaction History", path: "/transaction-history" },
    { icon: User, label: "Profile", path: "/profile" }
  ];

  const notifications = [
    {
      id: 1,
      message: "You are eligible to apply for a loan!",
      type: "success"
    },
    {
      id: 2,
      message: "Transaction today is RM1,245.25 today!",
      type: "info"
    }
  ];

  const loanOffers = [
    {
      id: 1,
      type: "Business Loan",
      amount: "RM 50,000",
      interestRate: "6.5%",
      tenure: "24 months",
      status: "Eligible",
      description: "Expand your nyonya kuih business with our competitive rates"
    },
    {
      id: 2,
      type: "Working Capital",
      amount: "RM 25,000",
      interestRate: "7.2%",
      tenure: "12 months",
      status: "Eligible",
      description: "Manage your daily operations and inventory"
    },
    {
      id: 3,
      type: "Equipment Financing",
      amount: "RM 15,000",
      interestRate: "8.0%",
      tenure: "18 months",
      status: "Under Review",
      description: "Purchase new equipment for your business"
    }
  ];

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
            <p className="text-sm text-muted-foreground">Digital Banking</p>
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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground">Mary</p>
              <p className="text-sm text-muted-foreground">Nyonya Kuih Seller</p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:text-foreground"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-3" />
            Log Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Notification Bell */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Loans</h1>
              <p className="text-muted-foreground">Explore loan options for your business growth</p>
            </div>
            
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
                  <h3 className="font-semibold text-foreground">Notifications</h3>
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-foreground">{notification.message}</p>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Loan Eligibility Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Loan Eligibility Status
              </CardTitle>
              <CardDescription>Based on your business performance and credit history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-foreground">Credit Score</h3>
                  <p className="text-2xl font-bold text-green-600">785</p>
                  <p className="text-sm text-muted-foreground">Excellent</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-foreground">Monthly Revenue</h3>
                  <p className="text-2xl font-bold text-blue-600">RM 8,745</p>
                  <p className="text-sm text-muted-foreground">Growing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-foreground">Business Age</h3>
                  <p className="text-2xl font-bold text-purple-600">3 Years</p>
                  <p className="text-sm text-muted-foreground">Established</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Available Loans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanOffers.map((loan) => (
              <Card key={loan.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{loan.type}</CardTitle>
                    <Badge variant={loan.status === "Eligible" ? "default" : "secondary"}>
                      {loan.status}
                    </Badge>
                  </div>
                  <CardDescription>{loan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Loan Amount</span>
                      <span className="font-semibold text-foreground">{loan.amount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Interest Rate</span>
                      <span className="font-semibold text-foreground">{loan.interestRate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Tenure</span>
                      <span className="font-semibold text-foreground">{loan.tenure}</span>
                    </div>
                    <Button 
                      className="w-full mt-4"
                      variant={loan.status === "Eligible" ? "default" : "outline"}
                      disabled={loan.status === "Under Review"}
                    >
                      {loan.status === "Eligible" ? "Apply Now" : "Under Review"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
