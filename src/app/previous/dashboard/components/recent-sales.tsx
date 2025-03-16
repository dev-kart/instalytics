import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define the structure of the sales data
interface Sale {
  id: number;
  userName: string;
  userEmail: string;
  userAvatar: string;
  amount: string;
}

interface RecentSalesProps {
  sales: Sale[]; // Prop for external sales data
}

export function RecentSales({ sales: initialSales }: RecentSalesProps) {
  const [sales, setSales] = useState<Sale[]>(initialSales || []); // Using prop data or default to empty array
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate fetching data with mock data if sales prop is empty
  useEffect(() => {
    if (initialSales.length === 0) {
      // Mock sales data if no sales are passed as a prop
      const mockSalesData: Sale[] = [
        {
          id: 1,
          userName: "Olivia Martin",
          userEmail: "olivia.martin@email.com",
          userAvatar: "/avatars/01.png",
          amount: "$1,999.00",
        },
        {
          id: 2,
          userName: "Jackson Lee",
          userEmail: "jackson.lee@email.com",
          userAvatar: "/avatars/02.png",
          amount: "$39.00",
        },
        {
          id: 3,
          userName: "Isabella Nguyen",
          userEmail: "isabella.nguyen@email.com",
          userAvatar: "/avatars/03.png",
          amount: "$299.00",
        },
        {
          id: 4,
          userName: "William Kim",
          userEmail: "will@email.com",
          userAvatar: "/avatars/04.png",
          amount: "$99.00",
        },
        {
          id: 5,
          userName: "Sofia Davis",
          userEmail: "sofia.davis@email.com",
          userAvatar: "/avatars/05.png",
          amount: "$39.00",
        },
      ];

      setSales(mockSalesData);
    }
    setLoading(false); // Set loading to false once data is "fetched" or ready
  }, [initialSales]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      {sales.map((sale) => (
        <div key={sale.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={sale.userAvatar} alt="Avatar" />
            <AvatarFallback>
              {sale.userName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.userName}</p>
            <p className="text-sm text-muted-foreground">{sale.userEmail}</p>
          </div>
          <div className="ml-auto font-medium">+{sale.amount}</div>
        </div>
      ))}
    </div>
  );
}
