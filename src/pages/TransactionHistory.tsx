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
  Download,
  Calendar,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useLanguage } from "@/contexts/LanguageContext";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

const TransactionHistory = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleLogout = () => {
    navigate("/login");
  };

  const sidebarItems = [
    { icon: Home, label: t('dashboard'), path: "/merchant-dashboard" },
    { icon: QrCode, label: t('qrPayment'), path: "/qr-payment" },
    { icon: DollarSign, label: t('loans'), path: "/loans" },
    { icon: History, label: t('transactionHistory'), active: true, path: "/transaction-history" }
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

  const mockTransactions = [
    {
      id: "TXN001",
      date: "15/01/2024",
      description: "DuitNow QR Payment - Nasi Lemak Sale",
      amount: 25.50,
      status: "completed"
    },
    {
      id: "TXN002", 
      date: "15/01/2024",
      description: "DuitNow QR Payment - Kuih Lapis",
      amount: 18.00,
      status: "completed"
    },
    {
      id: "TXN003",
      date: "14/01/2024", 
      description: "DuitNow QR Payment - Onde-onde",
      amount: 12.00,
      status: "completed"
    },
    {
      id: "TXN004",
      date: "14/01/2024",
      description: "DuitNow QR Payment - Kuih Talam",
      amount: 15.50,
      status: "pending"
    },
    {
      id: "TXN005",
      date: "13/01/2024",
      description: "DuitNow QR Payment - Pulut Inti",
      amount: 20.00,
      status: "completed"
    }
  ];

  const handleExportPDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("PENYATA BANK / BANK STATEMENT", 105, 25, { align: "center" });
    
    doc.setFontSize(16);
    doc.text("NiagaNow Digital Banking Sdn Bhd", 105, 35, { align: "center" });
    
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Licensed under Bank Negara Malaysia", 105, 42, { align: "center" });
    doc.text("Registration No: 123456789012", 105, 48, { align: "center" });
    
    // Account Information
    doc.setFont("helvetica", "bold");
    doc.text("MAKLUMAT AKAUN / ACCOUNT INFORMATION", 20, 65);
    
    doc.setFont("helvetica", "normal");
    doc.text("Nama Pemegang Akaun / Account Holder Name:", 20, 75);
    doc.text("Mary Lim Siew Choo", 20, 82);
    
    doc.text("Nombor Akaun / Account Number:", 20, 92);
    doc.text("1234567890123456", 20, 99);
    
    doc.text("Jenis Akaun / Account Type:", 20, 109);
    doc.text("Current Account - Business", 20, 116);
    
    doc.text("Tempoh Penyata / Statement Period:", 20, 126);
    const periodText = selectedMonth && selectedYear ? 
      `${selectedMonth}/${selectedYear}` : 
      "January 2024 - December 2024";
    doc.text(periodText, 20, 133);
    
    // Transaction Table
    const tableData = mockTransactions.map(transaction => [
      transaction.date,
      transaction.description,
      transaction.id,
      `RM ${transaction.amount.toFixed(2)}`,
      transaction.status === 'completed' ? 'Selesai' : 
      transaction.status === 'pending' ? 'Dalam Proses' : 'Gagal'
    ]);
    
    doc.autoTable({
      startY: 145,
      head: [['Tarikh\nDate', 'Penerangan\nDescription', 'Rujukan\nReference', 'Jumlah\nAmount (RM)', 'Status']],
      body: tableData,
      theme: 'grid',
      styles: { 
        fontSize: 9,
        cellPadding: 3,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.1
      },
      headStyles: { 
        fillColor: [240, 240, 240],
        textColor: [0, 0, 0],
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [250, 250, 250]
      }
    });
    
    // Summary
    const finalY = (doc as any).lastAutoTable.finalY + 20;
    doc.setFont("helvetica", "bold");
    doc.text("RINGKASAN / SUMMARY", 20, finalY);
    
    doc.setFont("helvetica", "normal");
    const totalAmount = mockTransactions.reduce((sum, t) => sum + t.amount, 0);
    const completedTransactions = mockTransactions.filter(t => t.status === 'completed').length;
    
    doc.text(`Jumlah Transaksi / Total Transactions: ${mockTransactions.length}`, 20, finalY + 10);
    doc.text(`Transaksi Berjaya / Successful Transactions: ${completedTransactions}`, 20, finalY + 20);
    doc.text(`Jumlah Nilai / Total Value: RM ${totalAmount.toFixed(2)}`, 20, finalY + 30);
    
    // Declaration
    doc.text("PENGISYTIHARAN / DECLARATION", 20, finalY + 50);
    doc.setFontSize(10);
    doc.text("Penyata ini dijana secara automatik dan sah untuk tujuan permohonan pinjaman.", 20, finalY + 60);
    doc.text("This statement is computer-generated and valid for loan application purposes.", 20, finalY + 67);
    
    doc.text(`Tarikh Jana / Generated Date: ${new Date().toLocaleDateString('en-GB')}`, 20, finalY + 80);
    doc.text("NiagaNow Digital Banking Sdn Bhd", 20, finalY + 90);
    
    // Save the PDF
    const fileName = `Transaction_History_${selectedMonth || 'All'}_${selectedYear || new Date().getFullYear()}.pdf`;
    doc.save(fileName);
  };

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

  const years = ["2024", "2023", "2022", "2021"];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">{t('completed')}</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">{t('pending')}</Badge>;
      case "failed":
        return <Badge className="bg-red-100 text-red-800">{t('failed')}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

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
        {/* Header with Notification Bell */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{t('transactionHistory')}</h1>
            <p className="text-muted-foreground">{t('viewTransactions')}</p>
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

        {/* Filters and Export */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter & Export
            </CardTitle>
            <CardDescription>
              Filter transactions by date and export to PDF
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 items-end">
              <div className="flex-1 min-w-[200px]">
                <label className="text-sm font-medium mb-2 block">{t('selectMonth')}</label>
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectMonth')} />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month.value} value={month.value}>
                        {month.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1 min-w-[150px]">
                <label className="text-sm font-medium mb-2 block">{t('selectYear')}</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectYear')} />
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
                {t('exportPdf')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Table */}
        <Card>
          <CardHeader>
            <CardTitle>{t('transactionHistory')}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t('transactionId')}</TableHead>
                  <TableHead>{t('date')}</TableHead>
                  <TableHead>{t('description')}</TableHead>
                  <TableHead className="text-right">{t('amount')}</TableHead>
                  <TableHead>{t('status')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.id}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell className="text-right">RM {transaction.amount.toFixed(2)}</TableCell>
                    <TableCell>{getStatusBadge(transaction.status)}</TableCell>
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
