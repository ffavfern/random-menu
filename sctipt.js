const menuItems = [
  {
    name: "ผัดไทยกุ้งสด",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "ข้าวผัดหมู",
    image: "https://img-global.cpcdn.com/recipes/3554b888efd5c361/1200x630cq70/photo.jpg",
  },
  {
    name: "ข้าวมันไก่",
    image: "https://i.ytimg.com/vi/YgmYqZWW4V8/maxresdefault.jpg",
  },
  {
    name: "ข้าวขาหมู",
    image: "https://images.deliveryhero.io/image/fd-th/LH/m6id-listing.jpg",
  },
  {
    name: "ส้มตำไทย",
    image: "https://s359.kapook.com/pagebuilder/2d976efb-6441-4684-bd72-63da127bf141.jpg",
  },
  {
    name: "ตำปูปลาร้า",
    image: "https://1376delivery.com/productimages/6618_-.jpg",
  },
  {
    name: "ไก่ย่าง",
    image: "https://i.ytimg.com/vi/0iXbezJfUb0/sddefault.jpg",
  },
  {
    name: "หมูกรอบผัดพริกแกง",
    image: "https://www.pholfoodmafia.com/wp-content/uploads/2020/05/4Stir-Fried-Pork-Belly-Crisp-with-Red-Curry-and-Salted-Egg.jpg",
  },
  {
    name: "ผัดกะเพราไก่ไข่ดาว",
    image: "https://app-cciyo.com/images/product/2/174_1.jpg",
  },
  {
    name: "ก๋วยเตี๋ยวเรือ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8bqglNo8Vt0KtZl6QYRdgq2IUmBoe6XlEKw&s",
  },
  {
    name: "ก๋วยเตี๋ยวไก่มะระ",
    image: "https://example.com/images/chicken-bittergourd-noodle.jpg",
  },
  {
    name: "ข้าวต้มกุ้ง",
    image: "https://s359.kapook.com/pagebuilder/a70f1080-df0d-4759-94f5-7e3bca9af692.jpg",
  },
  {
    name: "ข้าวต้มปลา",
    image: "https://img.wongnai.com/p/1920x0/2017/07/31/a3ca0e51ec6146419fd3f06a3d012a35.jpg",
  },
  {
    name: "ข้าวเหนียวหมูปิ้ง",
    image: "https://www.smethailandclub.com/upload/startup/image/1685522169.jpeg",
  },
  { name: "หมูกระทะ", image: "https://www.sgethai.com/wp-content/uploads/2023/04/01042024-mookrata-002.webp" },
  { name: "ชาบู", image: "https://today-obs.line-scdn.net/0hXvtZQP52B1lJIy1TQ6p4DnN1BDZ6TxRaLRVWWhVNWW02FBUOcxAcbGUjCWhgQ0AHJ01IPmklHGhsQ0gMIRcc/w1200" },
  {
    name: "ยำหมูยอ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUR3L41GOeClnos-zBLhOQ0LPqGQrEgb1JlQ&s",
  },
  {
    name: "ยำทะเล",
    image: "https://www.ajinomotofoodservicethailand.com/wp-content/uploads/2021/09/rd-1170x460.jpg",
  },
  {
    name: "ปลากระพงทอดน้ำปลา",
    image: "https://i.ytimg.com/vi/7y3N90FPzZE/sddefault.jpg",
  },
  {
    name: "ขนมจีนแกงเขียวหวานไก่",
    image: "https://i.ytimg.com/vi/HRrSYvikJ7A/maxresdefault.jpg",
  },
  { name: "ข้าวซอย", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYL_uI10cgpzbhjBC1jeSoHoxEgtBiprW_tA&s" },
  {
    name: "บะหมี่เกี๊ยวหมูแดง",
    image: "https://s359.kapook.com/r/600/auto/pagebuilder/ffa2ebe2-541b-4c68-9a18-14f234f8d544.jpg",
  },
  {
    name: "พิซซ่าหน้าฮาวายเอี้ยน",
    image: "https://img.kapook.com/u/wanwanat/hawaiian%20pizza.jpg",
  },
  {
    name: "สเต็กเนื้อ",
    image: "https://www.ktc.co.th/pub/media/Article/05/steak.webp",
  },
  { name: "ซูชิ", image: "https://1376delivery.com/productimages/7079_22..jpg" },
  {
    name: "ราเม็งญี่ปุ่น",
    image: "https://d3dyak49qszsk5.cloudfront.net/108258647_l_65bac75a44.jpg",
  },
  { name: "ทาโกะยากิ", image: "https://img.kapook.com/u/2017/surauch/cooking/n1_9.jpg" },
  {
    name: "ปิ้งย่างเกาหลี",
    image: "https://blog.hungryhub.com/wp-content/uploads/2022/07/Kimgane-Korea-BBQ-Buffet.jpg",
  },
  {
    name: "กิมจิจิเก",
    image: "https://img.kapook.com/u/2015/surauch/cooking1/kim1.jpg",
  },
  {
    name: "ข้าวหน้าหมูเกาหลี",
    image: "https://www.sgethai.com/wp-content/uploads/2022/04/Image01_9.webp",
  },
  {
    name: "ข้าวไข่เจียวกุ้งสับ",
    image: "https://s359.kapook.com/r/600/auto/pagebuilder/1c0a0dac-e4a9-4651-baa0-052a597ab7bf.jpg",
  },
  {
    name: "สปาเก็ตตี้ผัดขี้เมาทะเล",
    image: "https://img.wongnai.com/p/1920x0/2018/08/04/af5f930f8a0a4c798d903e22bc25d2f8.jpg",
  },
  {
    name: "ข้าวหมูทอดกระเทียม",
    image: "https://yalamarketplace.com/upload/1615341519665.jpg",
  },
  {
    name: "ผัดซีอิ๊วเส้นใหญ่หมู",
    image: "https://i.ytimg.com/vi/EUrpZKegSiY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA1OelJdqQxPrLybkJCEYM_zcSJxQ",
  },
  {
    name: "เกี๊ยวกุ้งน้ำ",
    image: "https://chefoldschool.com/wp-content/uploads/2023/03/2-2.jpg",
  },
  {
    name: "กุ้งอบวุ้นเส้น",
    image: "https://s359.kapook.com/pagebuilder/341d815e-38d5-4a50-8ba8-3df0d5850f32.jpg",
  },
  {
    name: "ข้าวหน้าเป็ด",
    image: "https://www.ajinomoto.co.th/storage/photos/shares/Recipe/Menu/3-08kawnaped/61a8eeb832b97.jpeg",
  },
  {
    name: "โรตีแกงเขียวหวาน",
    image: "https://f.ptcdn.info/631/051/000/or11f1jqrvYnOaS6tss-o.jpg",
  },
  {
    name: "น้ำพริกปลาทู ผักสด",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUMen8utEQgJLiz1fmA7galF-0N7Ah_U4FIQ&s",
  },
  {
    name: "ปอเปี๊ยะทอด",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRndyJgL82Q-fpMDiPd1wugVvGYoRIXV7zScw&s",
  },
  {
    name: "ข้าวคลุกกะปิ",
    image: "https://img.wongnai.com/p/1920x0/2020/06/29/708d89ccd15b455fba6e06832c8ff518.jpg",
  },
  {
    name: "ข้าวหมกไก่",
    image: "https://static.amarintv.com/images/upload/editor/source/Program/longpung-guide/guide9/kaomokkaikhunwut/kaomokkaikhunwut.jpg",
  },
  {
    name: "ข้าวหมูแดง",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhnQMS5PuBZcsMWHbXTP19TeoEw-WGQVlbg&s",
  },
  {
    name: "เกี๊ยวทอด",
    image: "https://img.wongnai.com/p/1968x0/2020/06/03/a963b12c4b3147e6893095bfdf2ea758.jpg",
  },
  {
    name: "หมี่หยกเป็ดย่าง",
    image: "https://www.mk1642.com/getmetafile/43dff749-945f-4715-9054-0bbc1eef8729/%E0%B8%8A%E0%B8%B8%E0%B8%94%E0%B9%81%E0%B8%AE%E0%B8%9B%E0%B8%9B%E0%B8%B5%E0%B9%89%E0%B8%9A%E0%B9%87%E0%B8%AD%E0%B8%81%E0%B8%8B%E0%B9%8C-%E0%B8%9A%E0%B8%B0%E0%B8%AB%E0%B8%A1%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B8%A2%E0%B8%81%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%94%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87.aspx",
  },
  {
    name: "ข้าวยำไก่แซ่บ",
    image: "https://img-global.cpcdn.com/recipes/9212ad1484c76e24/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%A2%E0%B8%B3%E0%B9%84%E0%B8%81%E0%B9%81%E0%B8%8B%E0%B8%9A.jpg",
  },
  {
    name: "ไข่เจียวปู",
    image: "https://img.kapook.com/u/2017/surauch/cooking/u1_27.jpg",
  },
  { name: "โรตีน้ำแกง", image: "https://t1.blockdit.com/photos/2020/08/5f35621ed59ba50aa5e77a43_800x0xcover_kRDEW6Yv.jpg" },
  {
    name: "ก๋วยเตี๋ยวต้มยำกุ้ง",
    image: "https://s359.kapook.com/pagebuilder/bfc6a9f5-2465-4c9b-84dc-d090e6b78d85.jpg",
  },
  {
    name: "ผัดพริกแกงหมูกรอบ",
    image: "https://img.wongnai.com/p/1968x0/2019/07/02/27ebe422d9314a238932913717ead1db.jpg",
  },
  {
    name: "ข้าวแกงกะหรี่ญี่ปุ่น",
    image: "https://i.ytimg.com/vi/7rXC7P2qeQc/sddefault.jpg",
  },
  {
    name: "ข้าวหน้าไก่เทอริยากิ",
    image: "https://www.thammculture.com/wp-content/uploads/2023/11/Untitled-561.jpg",
  },
  {
    name: "ผัดผักรวมมิตร",
    image: "https://api2.krua.co/wp-content/uploads/2022/10/RT1757_SEOImage_1200x630.jpg",
  },
  {
    name: "ส้มตำผลไม้",
    image: "https://img.wongnai.com/p/1920x0/2017/10/14/7b5637136c694a7590a917cbe75f4bc3.jpg",
  },
  {
    name: "ข้าวเหนียวไก่ทอด",
    image: "https://aroi-mark.com/wp-content/uploads/2020/12/%E0%B9%84%E0%B8%81%E0%B9%88%E0%B9%80%E0%B8%AD%E0%B9%8B%E0%B8%A2-%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%97%E0%B8%AD%E0%B8%94-1024x768.jpg",
  },
  {
    name: "ผัดเผ็ดหมูป่า",
    image: "https://www.easycookingmenu.com/media/k2/items/cache/03f59fdd2e12085da20c58ca95e46273_XL.jpg",
  },
  {
    name: "หมูสามชั้นทอดน้ำปลา",
    image: "https://img.wongnai.com/p/1920x0/2018/06/10/838abb7431b442fc87eeb8c3ea5bda8c.jpg",
  },
  {
    name: "ลาบหมู",
    image: "https://www.sgethai.com/wp-content/uploads/2022/08/Image10-2.webp",
  },
  {
    name: "ต้มยำกุ้งน้ำข้น",
    image: "https://img-global.cpcdn.com/recipes/ad596b9a5ba25286/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%95%E0%B8%A1%E0%B8%A2%E0%B8%B3%E0%B8%81%E0%B8%87%E0%B8%99%E0%B8%B3%E0%B8%82%E0%B8%99.jpg",
  },
  {
    name: "แกงส้มชะอมกุ้ง",
    image: "https://www.sgethai.com/wp-content/w3-webp/uploads/2022/11/10.jpgw3.webp",
  },
  {
    name: "ขนมจีนน้ำเงี้ยว",
    image: "https://img.wongnai.com/p/1920x0/2018/11/04/3ceccd73b8574f6da21e37203f62e714.jpg",
  },
  {
    name: "หมึกผัดไข่เค็ม",
    image: "https://img.kapook.com/u/pirawan/Cooking1/stir%20fried%20squid.jpg",
  },
  {
    name: "ยำวุ้นเส้นหมูสับ",
    image: "https://img.wongnai.com/p/1920x0/2021/07/26/153c01d7f10e4bbc90641182a30443ab.jpg",
  },
  {
    name: "น้ำตกหมู",
    image: "https://img-global.cpcdn.com/recipes/1ce0ae9fb9783ec1/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%99%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%AB%E0%B8%A1.jpg",
  },
  {
    name: "แกงเขียวหวานลูกชิ้นปลากราย",
    image: "https://sharp-weeclub.com/wp-content/uploads/2023/12/%E0%B9%81%E0%B8%81%E0%B8%872-990x510-1.jpg",
  },
  {
    name: "ข้าวหน้าไข่ดองซีอิ๊ว",
    image: "https://i.ytimg.com/vi/1qHxcWOaRa4/maxresdefault.jpg",
  },
  {
    name: "ไข่ตุ๋นทะเล",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYxZBmBiV4zJK6oo9iZPGiY-QN7AiPb7CrA&s",
  },
  {
    name: "เกี๊ยวน้ำ",
    image: "https://www.maggi.co.th/sites/default/files/styles/home_stage_944_531/public/srh_recipes/7226345eae541431be7ad68598a86325.jpg?h=c604f7cf&itok=KKj-hMxK",
  },
  {
    name: "ข้าวโพดอบเนย",
    image: "https://www.sgethai.com/wp-content/uploads/2022/11/221109-Content-%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B9%82%E0%B8%9E%E0%B8%94%E0%B8%84%E0%B8%A5%E0%B8%B8%E0%B8%81%E0%B9%80%E0%B8%99%E0%B8%A2-%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B9%82%E0%B8%9E%E0%B8%94%E0%B8%AD%E0%B8%9A%E0%B9%80%E0%B8%99%E0%B8%A2-02.webp",
  },
  {
    name: "สเต็กไก่",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OWD0e-jdXx4VOfuZ8ePM00TQraju_KOo4A&s",
  },
  {
    name: "ซี่โครงหมูอบน้ำผึ้ง",
    image: "https://i.ytimg.com/vi/gpf2z_UjYRs/maxresdefault.jpg",
  },
  {
    name: "บะหมี่แห้งหมูแดง",
    image: "https://เมนู.net/media/images/recipe/%E0%B8%9A%E0%B8%B0%E0%B8%AB%E0%B8%A1%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%AB%E0%B9%89%E0%B8%87%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%81%E0%B8%94%E0%B8%87.jpg",
  },
  {
    name: "ยำกุ้งฟู",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWd2rgYbF2_nfmX0NTFyps7sLw4F-evCQMiQ&s",
  },
  {
    name: "พะแนงหมู",
    image: "https://i.ytimg.com/vi/LYXmO9yDNN4/sddefault.jpg",
  },
  {
    name: "ซุปกระดูกหมู",
    image: "https://www.nsm.or.th/nsm/sites/default/files/2021-12/3_75.jpg",
  },
  {
    name: "ข้าวยำเกาหลีบิบิมบับ",
    image: "https://img.wongnai.com/p/1968x0/2020/04/25/fbb3a7bea0604a39bcbd694b2eec3999.jpg",
  },
  {
    name: "ไส้กรอกอีสาน",
    image: "https://s.isanook.com/wo/0/ud/0/2659/s.jpg?ip/crop/w670h402/q80/jpg",
  },
  {
    name: "ข้าวผัดกุ้ง",
    image: "https://img-global.cpcdn.com/recipes/725b05b137e5b4c3/1200x630cq70/photo.jpg",
  },
  {
    name: "กะเพราหมูกรอบ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQenFnL-kHcLjUqH4FILoCGciMQrK6aYU-6g&s",
  },
  {
    name: "แซลมอนซาชิมิ",
    image: "https://1376delivery.com/productimages/5043_PARTY%20SALMON%20SASHIMI%2020%20Pcs..jpg",
  },
  {
    name: "ปลาดิบรวม",
    image: "https://inwfile.com/s-cu/13czf4.jpg",
  },
  {
    name: "พาสต้าซอสครีมเห็ด",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFQPBs-cO8bd33Sz1XJWTZCL9MZ2x26w-BQ&s",
  },
  {
    name: "สลัดผลไม้",
    image: "https://img.kapook.com/u/2022/wanwanat/1104609044.jpg",
  },
  {
    name: "เครปเค้กชาไทย",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbq3-lSiQFlhcMWngHA8M1TyiptKdypbPFqQ&s",
  },
  {
    name: "เค้กมะพร้าว",
    image: "https://api2.krua.co/wp-content/uploads/2021/11/RB0502_ImageBanner_1140x507.jpg",
  },
  { name: "บราวนี่", image: "https://img-global.cpcdn.com/recipes/c6bc2216be36c000/1200x630cq70/photo.jpg" },
  {
    name: "บิงซูสตรอว์เบอร์รี",
    image: "https://www.playglao.co/wp-content/uploads/2021/09/%E0%B8%9A%E0%B8%B4%E0%B8%87%E0%B8%8B%E0%B8%B9%E0%B8%AA%E0%B8%95%E0%B8%AD%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88%E0%B8%8A%E0%B8%B5%E0%B8%AA%E0%B9%80%E0%B8%84%E0%B9%89%E0%B8%81-02_web.png",
  },
  {
    name: "แพนเค้กผลไม้รวม",
    image: "https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/makro-horeca-event-2023/%E0%B9%81%E0%B8%9E%E0%B8%99%E0%B9%80%E0%B8%84%E0%B9%89%E0%B8%81%E0%B8%9C%E0%B8%A5%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%AB%E0%B8%A5%E0%B8%B2%E0%B8%81%E0%B8%AA%E0%B8%B5_header.jpg",
  },
  {
    name: "ข้าวเหนียวมะม่วง",
    image: "https://www.ofm.co.th/blog/wp-content/uploads/2022/04/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87-1.jpg",
  },
  {
    name: "โรตีใส่ไข่",
    image: "https://img.wongnai.com/p/400x0/2021/10/05/343adbb5cc6e41a2822b3de24349b227.jpg",
  },
  {
    name: "ลูกชิ้นปิ้ง",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1EQat9tszr81jsVKdrvIyR1hqDtN-PpmoWQ&s",
  },
  {
    name: "ขนมเบื้องญวน",
    image: "https://i.ytimg.com/vi/IcORyoMDtwg/maxresdefault.jpg",
  },
  {
    name: "ขนมปังปิ้งเนยน้ำตาล",
    image: "https://img.wongnai.com/p/1920x0/2019/11/23/fc7cd3f5ea88409dafa5f3faf172ac76.jpg",
  },
  {
    name: "ไก่ทอดเกาหลี",
    image: "https://www.pim.in.th/images/all-side-dish-chicken-egg-duck/korean-fried-chicken/koren-fried-chicken-24.jpg",
  },
  {
    name: "ข้าวยำไก่ทอด",
    image: "https://img.kapook.com/u/2016/surauch/Mix/a9.jpg",
  },
  {
    name: "ข้าวหน้าไข่ข้น",
    image: "https://img.wongnai.com/p/1920x0/2017/09/26/f4a2b35abd654da6897ac35a7828866e.jpg",
  },
  {
    name: "ยำแซลมอน",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_gPxMHt91c7BzJt2O7XOdLTZ6KkIDKaZunw&s",
  },
  {
    name: "ไข่เจียวหมูสับ",
    image: "https://assets.unileversolutions.com/recipes-v2/117867.jpg",
  },
  {
    name: "หมูแดดเดียว",
    image: "https://www.pitchameat.com/wp-content/uploads/2023/08/1-1.webp",
  },
  {
    name: "กะหล่ำปลีผัดน้ำปลา",
    image: "https://i.ytimg.com/vi/h3iwdEzqQWk/maxresdefault.jpg",
  },
  {
    name: "แกงจืดเต้าหู้หมูสับ",
    image: "https://img.wongnai.com/p/1920x0/2019/03/25/16be129786034c1185c4cc0768f61356.jpg",
  },
  {
    name: "ตำแตงไข่ต้ม",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhYCy6I__NMDE8LWA3n3N7GU28v4vI2VTPw&s",
  },
  {
    name: "สปาเก็ตตี้คาโบนารา",
    image: "https://img-global.cpcdn.com/recipes/67cb4833a07f7acc/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%AA%E0%B8%9B%E0%B8%B2%E0%B9%80%E0%B8%81%E0%B8%95%E0%B8%95%E0%B8%84%E0%B8%B2%E0%B9%82%E0%B8%9A%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B8%B2.jpg",
  },
  {
    name: "เครปเย็นช็อกโกแลตกล้วย",
    image: "https://img.kapook.com/u/2017/surauch/cooking/g1_24.jpg",
  },
  {
    name: "ซุปครีมเห็ด",
    image: "https://api2.krua.co/wp-content/uploads/2020/07/RI1470_ImageBanner_1140x507-01-scaled.jpg",
  },
  {
    name: "พิซซ่าเป็ปเปอร์โรนี",
    image: "https://1376delivery.com/productimages/5818_Pepperoni-.jpg",
  },
  {
    name: "สปาเก็ตตี้ซอสมะเขือเทศ",
    image: "https://img.wongnai.com/p/1920x0/2019/11/19/9e280da5ad68453687784d6c9593014f.jpg",
  },
  {
    name: "ปลาซาบะย่างซีอิ๊ว",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRATo3WDL-M0WgxD4D2jsjFH5nqwA-gaYStfQ&s",
  },
  {
    name: "ขนมปังสังขยา",
    image: "https://img.kapook.com/u/2016/wanwanat/9988_Custard/custard1.jpg",
  },
  {
    name: "แกงฮังเล",
    image: "https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/soups/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AE%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%A5/%E0%B9%81%E0%B8%81%E0%B8%87%E0%B8%AE%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%A5_header.jpg",
  },
  {
    name: "น้ำพริกอ่อง",
    image: "https://storage.googleapis.com/cpbs-bucket-cms-uat/web/recipe/3978975fcdd092aeab0c7340c_20240630_205450.jpg",
  },
  {
    name: "ขนมจีนน้ำยาป่า",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8fjVgpEb9kTQDlfoppeAXuvxw1vNVMcbLw&s",
  },
  {
    name: "ก๋วยเตี๋ยวลุยสวน",
    image: "https://img.kapook.com/u/2015/surauch/cook2/luisuan-2.jpg",
  },
  {
    name: "ขนมปังหน้าหมู",
    image: "https://www.pim.in.th/images/all-snacks/minced-pork-toast/minced-pork-toast-18.JPG",
  },
  {
    name: "ข้าวต้มหมูสับ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndYFlj-9yuiyXjIqNrnl29fqipWO2myOXKQ&s",
  },
  {
    name: "ข้าวหน้าไข่ข้น",
    image: "https://img.wongnai.com/p/1920x0/2017/09/26/f4a2b35abd654da6897ac35a7828866e.jpg",
  },
  {
    name: "สุกี้แห้งทะเล",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQgkuO_8wvG9laCDkSjrF-kg0VTLqNRe1Lg&s",
  },
  {
    name: "ข้าวมันไก่ทอด",
    image: "https://food.mthai.com/app/uploads/2017/11/Hainanese-chicken-rice.jpg",
  },
  {
    name: "ข้าวไก่ย่างซอส",
    image: "https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RT0095_1200x630.jpg",
  },
  {
    name: "ซุปไก่ซุปเปอร์",
    image: "https://i.ytimg.com/vi/GiPAFqDZuto/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDoDcruoQWNAi6ZKVsoMkxKGv8mFg",
  },
  {
    name: "ลาบหมูทอดกรอบ",
    image: "https://img-global.cpcdn.com/recipes/a026bc94c591204c/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%A5%E0%B8%B2%E0%B8%9A%E0%B8%AB%E0%B8%A1%E0%B8%97%E0%B8%AD%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%AD%E0%B8%9A.jpg",
  },
  {
    name: "โรตีมะตะบะ",
    image: "https://www.dailynews.co.th/wp-content/uploads/2023/08/jbv.jpg",
  },
  {
    name: "เส้นหมี่ผัดซีอิ๊ว",
    image: "https://img.wongnai.com/p/1920x0/2019/11/03/ff40e49d3dd0433d8e5a793614507b32.jpg",
  },
  {
    name: "ก๋วยเตี๋ยวเย็นตาโฟ",
    image: "https://eknoodle.com/wp-content/uploads/2024/05/7.jpg",
  },
  {
    name: "ขนมจีนแกงเผ็ด",
    image: "https://img-global.cpcdn.com/recipes/4e39a078a78c2449/680x482cq70/%E0%B8%A3%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%95%E0%B8%A3-%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%88%E0%B8%99%E0%B9%81%E0%B8%81%E0%B8%87%E0%B9%84%E0%B8%81.jpg",
  },
  {
    name: "พาสต้าแซลมอนครีมซอส",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZR8ntLA_fDHx1X9LrTwIhY8DEmF5XtP7nw&s",
  },
  {
    name: "ผัดหมี่กระเฉด",
    image: "https://img.wongnai.com/p/1920x0/2019/12/16/727d6ecd8238457d959ce96916c54c2b.jpg",
  },
];

function getRandomMenu() {
    if (menuItems.length === 0) {
      return { name: "เมนูหมดแล้ว!", image: "" };
    }
    const randomIndex = Math.floor(Math.random() * menuItems.length);
    const selectedMenu = menuItems[randomIndex];
    menuItems.splice(randomIndex, 1); 
    return selectedMenu;
  }

  document.getElementById("randomBtn").addEventListener("click", function() {
    const result = getRandomMenu();
    const resultElement = document.getElementById("result");
    const imageElement = document.getElementById("menuImage");

    resultElement.innerText = result.name;
    if (result.image) {
      imageElement.src = result.image;
      imageElement.style.display = "block";
    } else {
      imageElement.style.display = "none";
    }
  });