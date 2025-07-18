
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
  CheckCircle2,
  Clock,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import LoanEligibilityForm from "@/components/LoanEligibilityForm";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

const Loans = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [showEligibilityForm, setShowEligibilityForm] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  const sidebarItems = [
    { icon: Home, label: t('dashboard'), path: "/merchant-dashboard" },
    { icon: QrCode, label: t('qrPayment'), path: "/qr-payment" },
    { icon: DollarSign, label: t('loans'), active: true, path: "/loans" },
    { icon: History, label: t('transactionHistory'), path: "/transaction-history" }
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

  const loanProducts = [
    {
      id: 1,
      name: t('smeWorkingCapital'),
      description: t('workingCapitalDesc'),
      interestRate: "5.5% - 8.5%",
      maxAmount: "RM50,000",
      tenure: "12 - 36 months",
      features: ["Quick approval", "Flexible repayment", "No collateral required"]
    },
    {
      id: 2,
      name: t('equipmentFinancing'),
      description: t('equipmentFinancingDesc'),
      interestRate: "6.0% - 9.0%",
      maxAmount: "RM100,000",
      tenure: "24 - 60 months",
      features: ["Equipment as collateral", "Competitive rates", "Long tenure"]
    },
    {
      id: 3,
      name: t('businessExpansion'),
      description: t('businessExpansionDesc'),
      interestRate: "7.0% - 10.0%",
      maxAmount: "RM200,000",
      tenure: "36 - 84 months",
      features: ["Large loan amounts", "Flexible usage", "Structured repayment"]
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
        {/* Header with Language Selector and Notification Bell */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{t('loans')}</h1>
            <p className="text-muted-foreground">{t('exploreLoans')}</p>
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
                    <div key={notification.id} className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-foreground">{notification.message}</p>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Eligibility Check Card */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              {t('checkEligibility')}
            </CardTitle>
            <CardDescription>
              {t('quickAssessment')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="banking" 
              size="lg"
              onClick={() => setShowEligibilityForm(true)}
              className="w-full sm:w-auto"
            >
              {t('startEligibilityCheck')}
            </Button>
          </CardContent>
        </Card>

        {/* Loan Products */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loanProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t('interestRate')}</span>
                    <span className="font-medium">{product.interestRate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t('maxAmount')}</span>
                    <span className="font-medium">{product.maxAmount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t('tenure')}</span>
                    <span className="font-medium">{product.tenure}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">{t('keyFeatures')}</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setShowEligibilityForm(true)}
                >
                  {t('applyNow')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{t('whyChooseNiagaNow')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <Clock className="w-8 h-8 text-primary mx-auto" />
                <h3 className="font-semibold">{t('quickProcessing')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('quickProcessingDesc')}
                </p>
              </div>
              <div className="text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto" />
                <h3 className="font-semibold">{t('flexibleTerms')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('flexibleTermsDesc')}
                </p>
              </div>
              <div className="text-center space-y-2">
                <AlertCircle className="w-8 h-8 text-blue-500 mx-auto" />
                <h3 className="font-semibold">{t('expertSupport')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('expertSupportDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Eligibility Form Dialog */}
      <Dialog open={showEligibilityForm} onOpenChange={setShowEligibilityForm}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Loan Eligibility Assessment</DialogTitle>
          </DialogHeader>
          <LoanEligibilityForm onClose={() => setShowEligibilityForm(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Loans;
