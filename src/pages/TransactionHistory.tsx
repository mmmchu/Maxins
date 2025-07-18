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
  ArrowUpRight,
  ArrowDownLeft,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TransactionHistory = () => {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState("01");
  const [selectedYear, setSelectedYear] = useState("2025");

  const handleLogout = () => {
    navigate("/login");
  };

  const handleExportPDF = () => {
    // Generate PDF export logic here
    const monthName = new Date(parseInt(selectedYear), parseInt(selectedMonth) - 1).toLocaleString('default', { month: 'long' });
    console.log(`Exporting transactions for ${monthName} ${selectedYear} to PDF...`);
    // This would typically call a PDF generation library or API
    alert(`Exporting transactions for ${monthName} ${selectedYear} to PDF...`);
  };

  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/merchant-dashboard" },
    { icon: QrCode, label: "QR Payment", path: "/qr-payment" },
    { icon: DollarSign, label: "Loans", path: "/loans" },
    { icon: History, label: "Transaction History", active: true, path: "/transaction-history" }
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

  const transactions = [
    {
      id: "TXN001",
      date: "2025-01-17",
      time: "14:30",
      description: "Kuih Lapis Sale",
      customer: "Ahmad Hassan",
      amount: 25.50,
      type: "credit",
      status: "completed"
    },
    {
      id: "TXN002",
      date: "2025-01-17",
      time: "13:15",
      description: "Onde-onde & Kuih Ketayap",
      customer: "Siti Nurhaliza",
      amount: 18.00,
      type: "credit",
      status: "completed"
    },
    {
      id: "TXN003",
      date: "2025-01-17",
      time: "12:45",
      description: "Kuih Dadar & Tart Nenas",
      customer: "Lim Wei Ming",
      amount: 32.00,
      type: "credit",
      status: "completed"
    },
    {
      id: "TXN004",
      date: "2025-01-17",
      time: "11:20",
      description: "Ingredient Purchase",
      customer: "Tesco Supermarket",
      amount: -85.50,
      type: "debit",
      status: "completed"
    },
    {
      id: "TXN005",
      date: "2025-01-16",
      time: "16:00",
      description: "Kuih Bahulu Bulk Order",
      customer: "Restaurant Seri Rasa",
      amount: 120.00,
      type: "credit",
      status: "completed"
    },
    {
      id: "TXN006",
      date: "2025-01-16",
      time: "15:30",
      description: "Kuih Talam & Pulut Tai Tai",
      customer: "Nurul Ain",
      amount: 28.50,
      type: "credit",
      status: "completed"
    },
    {
      id: "TXN007",
      date: "2025-01-16",
      time: "14:15",
      description: "Coconut Milk & Pandan",
      customer: "Pasar Borong",
      amount: -45.00,
      type: "debit",
      status: "completed"
    },
    {
      id: "TXN008",
      date: "2025-01-16",
      time: "10:45",
      description: "Kuih Seri Muka Set",
      customer: "Fatimah Abdullah",
      amount: 22.00,
      type: "credit",
      status: "completed"
    },
    {
      id: "TXN009",
      date: "2025-01-15",
      time: "17:20",
      description: "Mixed Kuih Platter",
      customer: "Office Catering Order",
      amount: 95.00,
      type: "credit",
      status: "completed"
    },
    {
      id: "TXN010",
      date: "2025-01-15",
      time: "09:30",
      description: "Gas Cylinder Refill",
      customer: "Gas Station",
      amount: -35.00,
      type: "debit",
      status: "completed"
    }
  ];

  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" }
  ];

  const years = ["2025", "2024", "2023", "2022"];

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
        {/* Header with Notification Bell */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Transaction History</h1>
            <p className="text-muted-foreground">Review your past transactions</p>
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

        {/* Transaction History Content */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>A list of your recent business transactions</CardDescription>
              </div>
              
              {/* Export Controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month) => (
                        <SelectItem key={month.value} value={month.value}>
                          {month.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button onClick={handleExportPDF} className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Export PDF
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Customer/Vendor</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <div className="text-sm">
                        <div className="font-medium">{transaction.date}</div>
                        <div className="text-muted-foreground">{transaction.time}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{transaction.id}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.customer}</TableCell>
                    <TableCell>
                      <div className={`flex items-center gap-1 ${
                        transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? (
                          <ArrowUpRight className="w-4 h-4" />
                        ) : (
                          <ArrowDownLeft className="w-4 h-4" />
                        )}
                        <span className="font-medium">
                          RM{Math.abs(transaction.amount).toFixed(2)}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                        {transaction.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TransactionHistory;
