"use client"




const data = [
    { company: 'Adyen', ticker: 'AFRM', vertical: 'Payments', price: 17.15, marketCap: 50.5, revenueGrowth: '49.0%', grossMargin: '15.8%', evRevenue: 6.3, ytdPerformance: '24.3%' },
    { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: 16.12, marketCap: 4.7, revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: 4.9, ytdPerformance: '77.1%' },
    { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: 16.27, marketCap: 1.5, revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: 7.0, ytdPerformance: '10.0%' },
    { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: 10.21, marketCap: 2.0, revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: 6.0, ytdPerformance: '10.5%' },
    { company: 'Bakkt Holdings', ticker: 'BKKT', vertical: 'Wealth', price: 1.32, marketCap: 0.1, revenueGrowth: '38%', grossMargin: '--', evRevenue: 0.4, ytdPerformance: '13.8%' },
    { company: 'Virtu Financial Inc', ticker: 'VIRT', vertical: 'Wealth', price: 17.0, marketCap: 3.1, revenueGrowth: '-22.0%', grossMargin: '38.2%', evRevenue: 2.6, ytdPerformance: '-17.8%' },
    { company: 'Adyen', ticker: 'AFRM', vertical: 'Payments', price: 17.15, marketCap: 50.5, revenueGrowth: '49.0%', grossMargin: '15.8%', evRevenue: 6.3, ytdPerformance: '24.3%' },
    { company: 'Affirm', ticker: 'AFRM', vertical: 'Lending', price: 16.12, marketCap: 4.7, revenueGrowth: '32.0%', grossMargin: '48.7%', evRevenue: 4.9, ytdPerformance: '77.1%' },
    { company: 'Alkami Technology', ticker: 'ALKT', vertical: 'B2B SaaS', price: 16.27, marketCap: 1.5, revenueGrowth: '34.0%', grossMargin: '53.0%', evRevenue: 7.0, ytdPerformance: '10.0%' },
    { company: 'AvidXchange', ticker: 'AVDX', vertical: 'Payments', price: 10.21, marketCap: 2.0, revenueGrowth: '27.0%', grossMargin: '61.5%', evRevenue: 6.0, ytdPerformance: '10.5%' }
  ];

const CompanyTable = () => {
    return (
        <div className="overflow-x-auto">
      <table className="min-w-full ">
        <thead>
          <tr className="">
            <th className="py-2 px-4 border-b text-left ">Company</th>
            <th className="py-2 px-4 border-b">Ticker</th>
            <th className="py-2 px-4 border-b">Vertical</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Market Cap ($B)</th>
            <th className="py-2 px-4 border-b">Revenue Growth</th>
            <th className="py-2 px-4 border-b">Gross Margin</th>
            <th className="py-2 px-4 border-b">EV/Revenue</th>
            <th className="py-2 px-4 border-b">YTD Performance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={`text-center ${[0, 2, 4, 6, 8,].includes(index) ?'bg-[#F3F3F3]' : ''} rounded-lg `}>
              <td className="py-2 px-4 border-b text-left">{item.company}</td>
              <td className="py-2 px-4 border-b ">{item.ticker}</td>
              <td className="py-2 px-4 border-b">{item.vertical}</td>
              <td className="py-2 px-4 border-b ">${item.price.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{item.marketCap.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{item.revenueGrowth}</td>
              <td className="py-2 px-4 border-b">{item.grossMargin}</td>
              <td className="py-2 px-4 border-b">{item.evRevenue.toFixed(1)}</td>
              <td className="py-2 px-4 border-b">{item.ytdPerformance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default CompanyTable;