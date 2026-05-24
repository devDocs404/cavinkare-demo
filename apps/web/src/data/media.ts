export type MediaArticle = {
	id: string;
	title: string;
	excerpt: string;
	imageUrl: string;
	publication: string;
	link: string;
	date?: string;
	location?: string;
	content?: React.ReactNode;
};

export const MEDIA_ARTICLES: MediaArticle[] = [
	{
		id: "1",
		title: "FMCG shopping list for '23: Less price hike, more rurban growth",
		excerpt:
			"FMCG Shopping list for '23: Less price hike, more rurban growth - Read the Full Article on - Business Standard",
		imageUrl:
			"https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
		publication: "Business Standard",
		link: "#",
		date: "12 January 2023",
		location: "Chennai",
		content: `
      <h3 class="text-xl font-bold mb-4">Introduction</h3>
      <p class="mb-6">The fast-moving consumer goods (FMCG) sector is stepping into 2023 with a renewed sense of optimism. After a challenging year filled with inflationary pressures, weak rural demand, and subdued profit margins, industry leaders are preparing for a more stable and growth-oriented year ahead.</p>
      
      <h3 class="text-xl font-bold mb-4">Price Hikes to Slow Down</h3>
      <p class="mb-6">With inflation starting to cool and raw material prices showing signs of easing, FMCG firms are likely to slow down their price hikes in 2023. Companies are expected to focus more on driving volume growth rather than increasing prices.<br/><br/>Prices of edible oils and packaging materials, which were major cost drivers in 2022, have started to soften. This could help in stabilizing overall product prices.</p>
      
      <h3 class="text-xl font-bold mb-4">Recap of 2022</h3>
      <p class="mb-6">The previous year, 2022, posed several challenges for FMCG companies. High raw material prices and inflation led to reduced margins. To cope, companies had to increase prices by an average of 8-9%. This affected affordability, especially in rural markets where demand fell significantly.<br/><br/>Despite these hurdles, many companies managed to remain resilient, supported by urban markets and modern trade channels.</p>
      
      <h3 class="text-xl font-bold mb-4">Dairy Sector Highlights</h3>
      <p class="mb-6">The dairy segment is also expected to see continued growth, though pricing pressures remain. Companies such as Mother Dairy and Parag Milk Foods anticipate price hikes of around 10-12%, primarily due to rising input costs.<br/><br/>Despite these hikes, demand is expected to stay strong, especially in urban markets. Parag Milk Foods, for instance, forecasts a revenue growth of 15-18% year-on-year, driven by both volume and pricing.</p>
      
      <h3 class="text-xl font-bold mb-4">Expectations for 2023</h3>
      <p class="mb-6">The outlook for 2023 appears more positive. Industry experts anticipate a shift in growth momentum, with urban markets expected to take the lead.<br/><br/>According to Dabur India CEO Mohit Malhotra, urban demand will continue to be driven by emerging channels such as modern trade and e-commerce.<br/><br/>FMCG sector growth is expected to be in the range of 7% to 9% in FY24. Compared to 2022, companies plan fewer price hikes, primarily because inflation is stabilizing, and input cost pressures are expected to reduce.</p>

      <h3 class="text-xl font-bold mb-4">Industry Sentiment</h3>
      <p class="mb-6">FMCG companies are preparing for a year where volume growth, efficiency, and innovation will be more important than just price hikes. Urban India will remain the key growth driver, while rural markets may take longer to recover.<br/><br/>Companies are also becoming more agile, focusing on:</p>
      <ul class="list-disc pl-6 mb-6">
        <li>Better supply chain management</li>
        <li>Expanding e-commerce and modern retail reach</li>
        <li>Product innovation and competitive pricing</li>
      </ul>
      <p class="mb-6">The sector is also expected to be resilient to any future Covid-like disruptions, with systems and structures now better equipped to handle uncertainty.</p>
      
      <h3 class="text-xl font-bold mb-4">Urban vs Rural: A Mixed Picture</h3>
      <p class="mb-6">Urban markets are expected to be the primary source of growth in 2023. Consumers in cities are showing stronger purchasing power, and companies are aligning their distribution strategies to take advantage of this trend.<br/><br/>On the other hand, rural demand remains a concern. Though there's hope for recovery through better monsoon seasons, increased minimum support prices (MSPs), and government schemes, the outlook is still cautious.<br/><br/>Sameer Shah, Chief Financial Officer at Godrej Consumer Products, believes rural consumption will see a gradual recovery. However, it may take time before it reaches pre-pandemic growth levels.</p>

      <h3 class="text-xl font-bold mb-4">Looking Ahead</h3>
      <p class="mb-6">Many industry leaders are cautiously optimistic. They believe that the worst of the cost pressures may be behind them and that the market is slowly stabilizing.<br/><br/>Venkatesh Vijayaraghavan, CEO of CavinKare, noted that while 2022 was marked by volatility, the FMCG sector has shown resilience and is expected to bounce back stronger in 2023.<br/><br/>Manish Bandlish, Managing Director of Mother Dairy, added that demand will continue to grow, even as companies focus on maintaining healthy profit margins.</p>

      <h3 class="text-sm font-bold mb-2">Summary of Key Points</h3>
      <ol class="list-decimal pl-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
        <li>FMCG sector is expected to grow at 7-9% in FY24.</li>
        <li>Urban markets will lead the recovery, while rural demand remains uncertain.</li>
        <li>Price hikes will reduce due to easing input costs.</li>
        <li>Dairy sector may continue to see price pressure but demand remains strong.</li>
        <li>Industry is better prepared for global or pandemic-related disruptions.</li>
      </ol>

      <h3 class="text-sm font-bold mb-2">Stay Updated</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-6">To stay informed about ongoing trends in the FMCG industry, subscribe to our newsletter and follow our reports.</p>

      <div class="text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-slate-800 pt-4">
        <p>Contact:</p>
        <p>editor@cavinkare.com</p>
      </div>
    `
	},
	{
		id: "2",
		title: "Health & Wellness Trends for '23: Holistic living",
		excerpt:
			"Health & Wellness Trends for '23: Holistic living - Read the Full Article on - Business Standard",
		imageUrl:
			"https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=800&auto=format&fit=crop",
		publication: "Business Standard",
		link: "#",
		date: "10 January 2023",
		location: "Chennai",
	},
	{
		id: "3",
		title: "Fashion Forecast for '23: Vintage looks return",
		excerpt:
			"Fashion Forecast for '23: Vintage looks return - Read the Full Article on - Business Standard",
		imageUrl:
			"https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop",
		publication: "Business Standard",
		link: "#",
		date: "08 January 2023",
		location: "Chennai",
	},
	{
		id: "4",
		title: "Travel Destinations to Explore in '23: Hidden gems",
		excerpt:
			"Travel Destinations to Explore in '23: Hidden gems - Read the Full Article on - Business Standard",
		imageUrl:
			"https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
		publication: "Business Standard",
		link: "#",
		date: "05 January 2023",
		location: "Chennai",
	},
	{
		id: "5",
		title: "Tech Gadgets Trends for '23: Sustainability focus",
		excerpt:
			"Tech Gadgets Trends for '23: Sustainability focus - Read the Full Article on - Business Standard",
		imageUrl:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
		publication: "Business Standard",
		link: "#",
		date: "02 January 2023",
		location: "Chennai",
	},
	{
		id: "6",
		title: "The Best Hair Supplements for Growth and Strength",
		excerpt:
			"The Best Hair Supplements for Growth and Strength - Read the Full Article on - Business Standard",
		imageUrl:
			"https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
		publication: "Business Standard",
		link: "#",
		date: "28 December 2022",
		location: "Chennai",
	},
	{
		id: "7",
		title: "The Impact of Diet on Hair Health",
		excerpt:
			"The Impact of Diet on Hair Health - Read the Full Article on - Business Standard",
		imageUrl:
			"https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop",
		publication: "Business Standard",
		link: "#",
		date: "25 December 2022",
		location: "Chennai",
	},
	{
		id: "8",
		title: "DIY Hair Treatments You Can Make at Home",
		excerpt:
			"DIY Hair Treatments You Can Make at Home - Read the Full Article on - Business Standard",
		imageUrl:
			"https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop",
		publication: "Business Standard",
		link: "#",
		date: "20 December 2022",
		location: "Chennai",
	},
	{
		id: "9",
		title: "How to Maintain Color-Treated Hair",
		excerpt:
			"How to Maintain Color-Treated Hair - Read the Full Article on - Business Standard",
		imageUrl:
			"https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop",
		publication: "Business Standard",
		link: "#",
		date: "15 December 2022",
		location: "Chennai",
	},
	{
		id: "10",
		title: "FMCG shopping list for '23: Less price hike, more rurban growth",
		excerpt:
			"FMCG Shopping list for '23: Less price hike, more rurban growth - Read the Full Article on - Business Standard",
		imageUrl:
			"https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
		publication: "Business Standard",
		link: "#",
		date: "10 December 2022",
		location: "Chennai",
	},
	{
		id: "11",
		title: "Health & Wellness Trends for '23: Holistic living",
		excerpt:
			"Health & Wellness Trends for '23: Holistic living - Read the Full Article on - Business Standard",
		imageUrl:
			"https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?q=80&w=800&auto=format&fit=crop",
		publication: "Business Standard",
		link: "#",
		date: "05 December 2022",
		location: "Chennai",
	},
	{
		id: "12",
		title: "Fashion Forecast for '23: Vintage looks return",
		excerpt:
			"Fashion Forecast for '23: Vintage looks return - Read the Full Article on - Business Standard",
		imageUrl:
			"https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=800&auto=format&fit=crop",
		publication: "Business Standard",
		link: "#",
		date: "01 December 2022",
		location: "Chennai",
	},
];
