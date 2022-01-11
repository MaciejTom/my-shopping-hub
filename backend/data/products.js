const products = [
  {
    name: "Apple - iPhone 12",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418406_sd.jpg",
    description:
      "IPhone 12. 5G to download movies on the fly and stream high-quality video.¹ Beautifully bright 6.1-inch Super Retina XDR display.² Ceramic Shield with 4x better drop performance.³ Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.⁴ Let the fun begin.",
    price: 699,
    countInStock: 100,
    category: "phone"
  },
  {
    name: "Apple - iPhone 13 Pro Max",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443337_sd.jpg",
    description:
      "iPhone 13 Pro Max. The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip. Superfast 5G.¹ Durable design and the best battery life ever in an iPhone.",
    price: 799,
    countInStock: 100,
    category: "phone"
  },
  {
    name: "Apple - iPhone 11 ",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6341/6341581_sd.jpg",
    description:
      "Shoot 4K videos, beautiful portraits, and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch Liquid Retina display.³ Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery life.² And worry less with water resistance up to 2 meters for 30 minutes.¹",
    price: 599,
    countInStock: 100,
    category: "phone"
  },
  {
    name: "Motorola - Moto G Stylus",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441177_sd.jpg",
    description: "With a 48MP Quad camera system, you can capture from the smallest details to grand canyon wide images. View them on the stunning 6.8” FHD+ Max Vision display and an 89% screen-to-body ratio. You don’t have to worry about battery life with a 4000mAh battery that can last up to three days.",
    price: 599,
    countInStock: 100,
    category: "phone"
  },
  {
    name: "Motorola - Moto G Pure",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6476/6476149_sd.jpg",
    description: "Meet Moto G Pure and get more of what you love. An ultra-wide view of your favorite movies, games, and video chats on a 6.5 Max Vision HD+ display. Plus, a two-day battery to keep the fun going all weekend long. And there’s more. Dual camera system with Night Vision. Super-responsive processor (3GB RAM). Water-repellent design. With Moto G Pure, more comes standard.",
    price: 599,
    countInStock: 100,
    category: "phone"
  },
  {
    name: "Nokia - G10",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462915_sd.jpg",
    description: "To survive family life, you need energy. Lots of energy. Luckily, Nokia G10 has what you need, with a battery that goes for days – not hours – between charges. The big screen will captivate your kids for the whole of the journey, and its triple rear camera with enhanced imagery means you’re always ready to catch those special moments, whenever they might happen. Combine that with the latest Android™ 11, two years of software upgrades and three years of security updates and you’ve got a phone that will truly stand the test of time.",
    price: 149,
    countInStock: 100,
    category: "phone"
  },
  {
    name: "Google - Pixel 6 Pro",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483628_sd.jpg",
    description: "Introducing Pixel 6 Pro, the completely redesigned, fully loaded Google 5G phone.* With a powerful camera system, next-gen security, and the custom-built Google Tensor processor, it’s the smartest and fastest Pixel yet.",
    price: 199,
    countInStock: 100,
    category: "phone"
  },
  {
    name: "Google - Pixel 6",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483686_sd.jpg",
    description: "Meet Pixel 6. It’s completely reimagined, inside and out. Powered by Tensor, Google’s first-ever processor, it’s fast, smart, and secure. The all-day battery adapts to you.* The Pixel Camera captures a moment just how you experienced it. And the Personal Safety app and the new Titan M2TM chip help protect you, your stuff, and your privacy.",
    price: 299,
    countInStock: 100,
    category: "phone"
  },
  {
    name: "LG - V40 ThinQ",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6306/6306922_sd.jpg",
    description: "Capture moments at different angles with this Verizon LG V40 ThinQ smartphone. The five-camera design offers multiple ways to take selfies and other photos, and the 6.4-inch display lets you view them clearly in vibrant colors. This LG V40 ThinQ smartphone has a Boombox speaker so you can enjoy DTS:X surround sound wherever you go.",
    price: 799,
    countInStock: 100,
    category: "phone"
  },
  {
    name: "Samsung - Galaxy Z Fold2",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426271_sd.jpg",
    description: "Galaxy Z Fold2 5G for Verizon is the revolutionary mobile experience you've been waiting for. With a balanced, portable design and on-demand expansive viewing, Galaxy Z Fold2 5G brings seamless interactivity, enhanced hypertasking, and a transformative camera experience. *Requires optimal 5G network connection, available in select markets. Check with your carrier for availability and details. Download and streaming speeds may vary based on content provider, server connection and other factors.",
    price: 499,
    countInStock: 100,
    category: "phone"
  },
  {
    name: "Samsung - Galaxy S21",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6444/6444518_sd.jpg",
    description: "With Galaxy S21+ 5G for Verizon, you have the ability to record in 8K. Which means your videos are double the resolution of 4K video. Or use the 64MP camera for still shots that come out clear whether it’s day or night. Single Take AI transcends the usual restrictions of photo and video editing to capture life’s greatest moments in one single take. Galaxy S21+, made for the epic in every day.",
    price: 399,
    countInStock: 100,
    category: "phone"
  },
  {
    name: "Samsung - Galaxy Z Fold3",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6468/6468284_sd.jpg",
    description: "Unfold a world of possibilities with Samsung Galaxy Z Fold3 5G. You can do it all on this incredible device that’s so much more than a phone — it’s a compact yet powerful tablet that helps you master your busy life. Bring your workspace anywhere with a foldable, expansive screen that gives you multiple windows that make multitasking a breeze.",
    price: 699,
    countInStock: 100,
    category: "phone"
  },
  {
    name: "Astro Gaming - A40 TR X-Edition",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6278/6278220_sd.jpg",
    description: "Compatible with PlayStation 5 and Xbox Series X|S. Featuring a Special Edition colorway and branding, the A40 TR: X Edition commemorates 10 years of setting the gold standard for gaming audio with the A40 Headset. Precisely configured with ASTRO Audio, the A40 TR: X Edition delivers premium audio fidelity designed to give players a competitive advantage and is optimized for consoles, Windows 10, and mobile gaming. Adapt to any environment with swappable noise-isolating Mod Kit components, sold separately. Join us in celebrating a decade revolutionizing how players experience gaming. Listen in.",
    price: 119,
    countInStock: 33,
    category: "gaming"
  },
  {
    name: "Marvel's Spider-Man: Miles Morales",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430159_sd.jpg",
    description: "In the latest adventure in the Marvel's Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel's New York, Miles must take up the mantle of Spider-Man and own it.",
    price: 79,
    countInStock: 100,
    category: "gaming"
  },
  {
    name: "Turtle Beach - Stealth 700",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6422/6422343_sd.jpg",
    description: "Offering gamers a massive update featuring upgraded performance, comfort and styling, the Turtle Beach® Stealth™ 700 Gen 2 is the successor to the best-selling premium wireless gaming headset designed for PS5™, PS4™ & PS4™ Pro. The Stealth™ 700 Gen 2 wireless gaming headset features a host of updates including upgraded performance, comfort and styling. An updated flip-to-mute mic enhances chat clarity and seamlessly conceals into the housing when muted. New Aerofit™ cooling gel-infused memory foam ear cushions and a re-designed metal-reinforced headband provides long-lasting durability and comfort.",
    price: 129,
    countInStock: 100,
    category: "gaming"
  },
  {
    name: "Turtle Beach - Recon 200",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6474/6474478_sd.jpg",
    description: "Hear Big. Win Big. Take your game to the next level on Xbox or PlayStation with the Turtle Beach Recon 200 Gen 2 powered gaming headset. Powered by a rechargeable 12-hour battery, the Recon 200 Gen 2 multiplatform gaming headset delivers powerful, amplified audio, and can keep going without power in passive mode. Whether you’re chatting with teammates or trash-talking the enemy, the flip-to-mute mic picks up your comms loud and clear. Play for hours in comfort with ultra-soft memory foam ear cushions with ProSpecs technology.",
    price: 49,
    countInStock: 100,
    category: "gaming"
  },
  {
    name: "Madden NFL 22",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6465/6465432_sd.jpg",
    description: "Madden NFL 22 is where gameday happens",
    price: 44,
    countInStock: 100,
    category: "gaming"
  },
  {
    name: "Mario + Rabbids Kingdom Battle",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5909/5909500_sd.jpg",
    description: "Worlds collide in Mario + Rabbids Kingdom Battle! The Mushroom Kingdom has been torn apart by a mysterious vortex, transporting the chaotic Rabbids into this once-peaceful land. To restore order, Mario, Luigi, Princess Peach, and Yoshi must team up with a whole new crew made up of four Rabbids heroes! Together, they will battle with weapons through four worlds filled with combat, puzzles, and unpredictable enemies.Developed exclusively for the Nintendo Switch system, Mario + Rabbids Kingdom Battle is the best of the Mario and Rabbids franchises, combining all that you love about Mario iconic universe with the side-splitting antics of the Rabbids.",
    price: 19,
    countInStock: 100,
    category: "gaming"
  },
  {
    name: "The Last of Us Part II",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6255/6255399_sd.jpg",
    description: "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. When a violent event disrupts that peace, Ellie embarks on a relentless journey to carry out justice and find closure. As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions.",
    price: 19,
    countInStock: 100,
    category: "gaming"
  },
  {
    name: "Astro Gaming - A40",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6321/6321673_sd.jpg",
    description: "The ASTRO A40 TR Headset + MixAmp Pro TR for Xbox One, PC and Mac is the premier audio solution for esports athletes, content creators and streamers. It meets esports athletes’ rigorous standards for audio fidelity, comfort and durability. The MixAmp Pro TR features Dolby Audio processing and enables lag and interference-free delivery of game sound and voice communication. The A40 TR arrives as an open-back headset featuring a swappable precision mic and customizable Speaker Tags.",
    price: 199,
    countInStock: 100,
    category: "gaming"
  },
  {
    name: "Astro Gaming - A10",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6369/6369436_rd.jpg",
    description: "Play better win more. Unlock the ultimate Xbox One experience with the A10 Headset, featuring durable construction and extended comfort so you can play longer with no down-time. The A10 Headset is Tuned for Gaming with ASTRO Audio, ensuring you hear your game and your teammates with clarity and precision. The uni-directional mic featuring flip-up mute functionality and in-line volume control puts you in full control of your gaming audio experience. Don’t just play your game: experience it.",
    price: 59,
    countInStock: 100,
    category: "gaming"
  },
  {
    name: "WD - 2TB Game Drive for PS4",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6295/6295021_rd.jpg",
    description: "Grow your collection of 4K games on this WD External USB 3.0 Portable Hard Drive for PS4. The gaming drive's large capacity provides enough room for all your favorite PS4 games, DLC and patches. An included USB 3.0 cable allows you to connect directly to a PlayStation 4/4 Pro console. The sleek, portable design of the drive lets you share your games with friends.",
    price: 74,
    countInStock: 100,
    category: "gaming"
  },
  {
    name: "MLB The Show 21",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451496cv14d.jpg",
    description: "MLB The Show 21 Xbox one",
    price: 19,
    countInStock: 100,
    category: "gaming"
  },
  {
    name: "The Yakuza Remastered Collection",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6374/6374990_sd.jpg",
    description: "Get up to speed with the Kazuma Kiryu's saga in The Yakuza Remastered Collection for PlayStation 4. Featuring restored content and updated graphics, this beautifully remastered Yakuza 3, 4 and 5 provide an immersive gaming experience. Enjoy the thrill of completing the dragon of Dojimas journey in The Yakuza Remastered Collection.",
    price: 39,
    countInStock: 100,
    category: "gaming"
  },
  {
    name: "Dell - S2721NX 27 IPS",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425904_sd.jpg",
    description: "The Dell27” FHD monitor is beautifully designed to sit easily into any space ready for your everyday lifestyle. Built-in dual HDMI ports keep your devices always plugged in. The three-sided ultrathin bezel design lets you enjoy superb screen clarity in 1920 x 1080 Full HD resolution. Smooth, tear-free experience with AMD FreeSync™ technology, featuring up to 75Hz refresh rate. This TÜV-certified monitor has a flicker-free screen with ComfortView, a feature that reduces harmful blue light emissions.",
    price: 219,
    countInStock: 100,
    category: "computer"
  },
  {
    name: "Apple - MacBook Pro - 13",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6287/6287726_sd.jpg",
    description: "MacBook Pro has a tenth-generation quad-core Intel processor with Turbo Boost up to 3.8GHz. A brilliant and colorful Retina display with True Tone technology for a more true-to-life viewing experience. A backlit Magic Keyboard and Touch ID. Fast integrated graphics. And the versatile Touch Bar for more ways to be productive. It's Apple's most powerful 13-inch notebook. Pushed even further.",
    price: 1299,
    countInStock: 100,
    category: "computer"
  },
  {
    name: "ASUS - TUF 23.8” IPS FHD",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6395/6395359_sd.jpg",
    description: "Play to your full potential with this 23.8-inch ASUS TUF gaming monitor. The 1ms response time prevents blurring and lagging for quality visuals, while the FreeSync technology eliminates stuttering and tearing for seamless gameplay. This ASUS TUF gaming monitor has an anti-glare display that reduces reflections, and it features flicker-free technology that reduces eye strain for comfortable viewing.",
    price: 209,
    countInStock: 100,
    category: "computer"
  },
  {
    name: "Lenovo - Chromebook 3 11 Chromebook",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419029_sd.jpg",
    description: "Fast, flexible, and fun, the Chromebook 3-11 brings everyone’s favorite Chromebook features, housed in a slim chassis, running on the lightning-fast Chrome OS that boots up in seconds, updates automatically, and is protected by built-in virus protection. Powered by an AMD A6 processor with up to 10 hours of battery life, the IdeaPad 3 Chromebook can seamlessly run all of your favorite apps at the same time",
    price: 119,
    countInStock: 100,
    category: "computer"
  },
  {
    name: "HP - 15.6 Laptop",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477885_sd.jpg",
    description: "See more. Take it anywhere. With its 6.5 mm micro-edge bezel display, slim and light design, plus 81% screen to body ratio – this PC lets you see more and do more, no matter where the day takes you. Reliable performance for every day: Powerful enough for your busiest days – this PC features an Intel® processor and integrated graphics. Powered up and productive. All day long. Designed for all-day productivity with extended battery life and precision touchpad.",
    price: 299,
    countInStock: 100,
    category: "computer"
  },
  {
    name: "WD - Easystore 2TB",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6406/6406513_sd.jpg",
    description: "Carry important files wherever you go with this Western Digital easystore portable hard drive. The 2TB capacity offers ample space for bulky files, while the USB 3.0 interface ensures seamless file transfer. This Western Digital easystore portable hard drive has an automatic backup feature to reduce the risk of data loss.",
    price: 56,
    countInStock: 100,
    category: "computer"
  },
  {
    name: "HP - ENVY 2-in-1 15.6 Touch-Screen",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479175_sd.jpg",
    description: "See and do it all in perfect color: The ENVY x360 15 gives you a dazzling high definition screen with accurate color and more ways to make your masterpiece with HP Quick Drop file sharing. Power to set your creativity free: Unleash your creativity with the power and performance of an AMD Ryzen™ processor and Radeon™ Graphics that make every task incredibly fast and efficient. Peace of mind at your fingertips: Keep it confidential with privacy camera shutter key to turn camera off and a mute mic button for private conversations.",
    price: 619,
    countInStock: 100,
    category: "computer"
  },
  {
    name: "MacBook Pro 13.3 Laptop",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418601_sd.jpg",
    description: "The Apple M1 chip redefines the 13-inch MacBook Pro. Featuring an 8-core CPU that flies through complex workflows in photography, coding, video editing, and more. Incredible 8-core GPU that crushes graphics-intensive tasks and enables super-smooth gaming. An advanced 16-core Neural Engine for more machine learning power in your favorite apps. Superfast unified memory for fluid performance. And the longest-ever battery life in a Mac at up to 20 hours.² It’s Apple's most popular pro notebook. Way more performance and way more pro.",
    price: 1149,
    countInStock: 100,
    category: "computer"
  },
  {
    name: "MacBook Pro 14 Laptop",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450853_sd.jpg",
    description: "The new MacBook Pro delivers game-changing performance for pro users. With the powerful M1 Pro to supercharge pro-level workflows while getting amazing battery life.¹ And with an immersive 14-inch Liquid Retina XDR display and an array of pro ports, you can do more than ever with MacBook Pro",
    price: 1999,
    countInStock: 100,
    category: "computer"
  },
  {
    name: "Logitech - C920S HD Webcam",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6321/6321794_sd.jpg;maxHeight=1000;maxWidth=1000",
    description: "Logitech C920s is a budget-friendly, work-from-anywhere webcam that delivers a professional video meeting experience. It includes features designed to make you look and sound great in your next meeting. A 78º diagonal field of view perfectly frames you and your space, while autofocus adjusts smoothly and precisely. RightLight 2 technology automatically adjusts to your lighting situation even in low-light or backlit conditions. And dual integrated mics accurately capture your voice from multiple angles for greater nuance. If you’re streaming or recording, use Logitech’s Capture app to edit and customize. Flip down the lens cover at any point to protect your privacy.",
    price: 59,
    countInStock: 100,
    category: "computer"
  },
  {
    name: "HP - 14 Laptop - Intel Celeron",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6478/6478314_sd.jpg",
    description: "Take it anywhere. See more. With its thin and light design, 6.5 mm micro-edge bezel display, and 79% screen to body ratio(40) – take this PC anywhere and see and do more. Reliable performance for every day: Powerful enough for your busiest days, this PC features an Intel® processor and reliable flash-based storage at a great value. Secured, seamless log in. All day long. With a long battery life and fast-charge technology, this laptop lets you work, watch, and stay connected all day. Integrated precision touchpad with multi-touch support speeds up both navigation and productivity. Fingerprint reader gives you a seamless, secure login. Make the most out of your 365: Bring your ideas to life. Your creativity now gets a boost with Microsoft 365. Office - Word, Excel, and Power Point - now includes smart assistance features that help make your writing more readable, your data clearer and your presentations more visually powerful. One year subscription included.",
    price: 189,
    countInStock: 100,
    category: "computer"
  },
  {
    name: "MacBook Air 13.3 Laptop",
    imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5721/5721600_sd.jpg",
    description: "Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with the 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever — up to 18 hours.¹ MacBook Air. Still perfectly portable. Just a lot more powerful.",
    price: 999,
    countInStock: 100,
    category: "computer"
  },
  ];

module.exports = products;
