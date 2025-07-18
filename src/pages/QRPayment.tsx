import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Home, 
  QrCode, 
  User, 
  LogOut,
  DollarSign,
  History,
  Download,
  Share2,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const QRPayment = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: false, path: "/merchant-dashboard" },
    { icon: QrCode, label: "QR Payment", active: true, path: "/qr-payment" },
    { icon: DollarSign, label: "Loans", path: "/loans" },
    { icon: History, label: "Transaction History", path: "/transaction-history" }
  ];

  const handleDownload = () => {
    // In a real app, this would download the QR code
    console.log("Downloading QR code...");
  };

  const handleShare = () => {
    // In a real app, this would share the QR code
    console.log("Sharing QR code...");
  };

  // Mock QR code data - in real app this would be generated based on business details
  const qrCodeData = "https://duitnow.my/pay/mary-nyonya-kuih";

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
                <p className="font-medium text-foreground">Mary</p>
                <p className="text-sm text-muted-foreground">Nyonya Kuih Seller</p>
              </div>
            </div>
          </Button>
          
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/merchant-dashboard")}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">QR Payment</h1>
              <p className="text-muted-foreground">Share your QR code with customers to receive payments</p>
            </div>
          </div>

          {/* QR Code Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* QR Code Card */}
            <Card className="flex flex-col items-center p-8">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <QrCode className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Mary's Nyonya Kuih</CardTitle>
                <CardDescription className="text-lg">Traditional Kuih & Desserts</CardDescription>
              </CardHeader>
              
              <CardContent className="flex flex-col items-center space-y-6">
                {/* QR Code - Using the uploaded image */}
                <div className="w-64 h-64 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center p-4">
                  <img 
                    src="/lovable-uploads/34f74a28-e5e1-40c6-a860-c9e551cc097d.png" 
                    alt="DuitNow QR Code for Mary's Nyonya Kuih"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <p className="text-sm text-muted-foreground text-center">
                  Scan this QR code to pay Mary's Nyonya Kuih
                </p>
              </CardContent>
            </Card>

            {/* Payment Details */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Business Name:</span>
                    <span className="font-medium">Mary's Nyonya Kuih</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Owner:</span>
                    <span className="font-medium">Mary Lim</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Business Type:</span>
                    <span className="font-medium">Food & Beverage</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Payment Method:</span>
                    <span className="font-medium">DuitNow QR</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How to Use</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                      1
                    </div>
                    <p className="text-sm text-muted-foreground">Customer opens their banking app</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                      2
                    </div>
                    <p className="text-sm text-muted-foreground">They scan your QR code</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                      3
                    </div>
                    <p className="text-sm text-muted-foreground">They enter the payment amount</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                      4
                    </div>
                    <p className="text-sm text-muted-foreground">Payment is completed instantly</p>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button onClick={handleDownload} className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Download QR
                </Button>
                <Button onClick={handleShare} variant="outline" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share QR
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRPayment;
