import React from 'react';
const MovieCardDetails = [
    {
        movieImgSrc:"https://nosternerstuffthanthis.files.wordpress.com/2013/09/segen-world-war-z.jpg",
        movieCardTitle:"The WorldWar Z",
        movieCardParagraph:"This movie is related to a zombies and just for fun you can watch it on official website!",
        btn:"Watch",
        WatchingLink:"https://www.youtube.com/watch?v=aAjMFuu2GZ0",
    },
    {
        movieImgSrc:"http://cdn.wallpapersafari.com/80/18/8xlmcu.jpg",
        movieCardTitle:"Game of Thrones",
        movieCardParagraph:"This movie is related to a zombies and just for fun you can watch it on official website!",
        btn:"Watch",
        WatchingLink:"https://www.youtube.com/watch?v=lusbLvqTWrw",
    },
    {
        movieImgSrc:"https://dvdbash.files.wordpress.com/2012/01/blade-tv-series-sticky-fingaz-jill-wagner-jessica-gower-b0013mynz2-b0010tdrp0-dvdbash-17.jpg",
        movieCardTitle:"Blade Season",
        movieCardParagraph:"This movie is related to a zombies and just for fun you can watch it on official website!",
        btn:"Watch",
        WatchingLink:"https://video.search.yahoo.com/search/video;_ylt=AwrJ7JW9TLZf_tAAG6hXNyoA;_ylu=Y29sbwNiZjEEcG9zAzIEdnRpZANBMDU5OV8xBHNlYwNzYw--?p=blade+season&fr=mcafee&turl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOVP.DDkeUu9v6RJ9b00ROc7K8AEsDh%26amp%3Bpid%3DApi%26w%3D144%26h%3D77%26c%3D7&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_hSb1UFfNY0&tit=blade+s01e09&w=144&h=78&pos=1&vid=d2b530c2d5e673fa4fe6fcd3d934f613&sigr=DSw6pZ5G6LeP&sigt=0Ann_IYzvzfL&sigi=STODgB7Etl8w",
    },
    {
        movieImgSrc:"http://i.huffpost.com/gen/1060562/images/o-ZOMBIES-AND-LAW-facebook.jpg",
        movieCardTitle:"Zombies Zenain",
        movieCardParagraph:"This movie is related to a zombies and just for fun you can watch it on official website!",
        btn:"Watch",
        WatchingLink:"https://video.search.yahoo.com/search/video;_ylt=A0geKYzkTLZfoLAAoKlXNyoA;_ylu=Y29sbwNiZjEEcG9zAzMEdnRpZANBMDU5OV8xBHNlYwNzYw--?p=zombies+movie&fr=mcafee&turl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOVP.lJeTUtbRLh3PWLu61tkvZwEsDh%26amp%3Bpid%3DApi%26w%3D144%26h%3D77%26c%3D7&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dbk33B3y53s4&tit=New+Zombie+Movie+2020+Full+Length+Horror+Movies+in+English&w=144&h=78&pos=1&vid=e82b7948d3abfd85fefbd4b9ce3bd0cb&sigr=LB7MnUBWPfK_&sigt=TkuaSkckWSfQ&sigi=m8nWS6Z0GeAN",
    },
    {
        movieImgSrc:"https://weliveentertainment.com/wp-content/uploads/2017/11/Justice-League-Movie.jpg",
        movieCardTitle:"Justice League",
        movieCardParagraph:"This movie is related to a zombies and just for fun you can watch it on official website!",
        btn:"Watch",
        WatchingLink:"https://r.search.yahoo.com/_ylt=A0geKLwLTbZfAR0ASwhXNyoA;_ylu=Y29sbwNiZjEEcG9zAzIEdnRpZANBMDU5OV8xBHNlYwNzYw--/RV=2/RE=1605811595/RO=10/RU=https%3a%2f%2fwww.yahoo.com%2flifestyle%2fzack-snyder-teases-justice-league-193616270.html/RK=2/RS=KQDMB.X2ftRGL1XcwHT0UBzzql4-",
    },
    {
        movieImgSrc:"https://wallpapermemory.com/uploads/334/game-of-thrones-wallpaper-hd-1920x1080-383419.jpg",
        movieCardTitle:"Winter Is Coming",
        movieCardParagraph:"This movie is related to a zombies and just for fun you can watch it on official website!",
        btn:"Watch",
        WatchingLink:"https://video.search.yahoo.com/search/video;_ylt=A2KIbMcnTbZfyqwAwRFXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZANBMDU5OV8xBHNlYwNzYw--?p=winter+is+coming+movie&fr=mcafee&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOVP.16oeYp92Go8k1CCDvFEbdgHgFo%26amp%3Bpid%3DApi%26w%3D144%26h%3D77%26c%3D7&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvxByZAPvRJA&tit=Winter+Is+Coming&w=144&h=78&pos=1&vid=5a70adf41d9f22c6f93af9588826e845&sigr=fAthPz2wilYZ&sigt=0vUeQJ8hE8Pt&sigi=dkisot7pLFEN",
    },
    {
        movieImgSrc:"https://www.moviehdwallpapers.com/wp-content/uploads/Hollywood-Movies-HD-Wallpapers-1035.jpg",
        movieCardTitle:"Avater",
        movieCardParagraph:"This movie is related to a zombies and just for fun you can watch it on official website!",
        btn:"Watch",
        WatchingLink:"https://video.search.yahoo.com/search/video;_ylt=AwrEzeZLTbZfdoUAb3dXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZANBMDU5OV8xBHNlYwNzYw--?p=avater+movie&fr=mcafee&turl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOVP.romaWOzLi-E22I9J8nC37gEsDh%26amp%3Bpid%3DApi%26w%3D144%26h%3D77%26c%3D7&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D49ttxlWY6VA&tit=Avatar+2+Full+Movie&w=144&h=78&pos=1&vid=3d7fc9be027adfd8dd1a7b42f7eaa660&sigr=irmIRLmwvM0s&sigt=E4poumGK1mmN&sigi=WjK2Pmz.OC_1",
    },
    {
        movieImgSrc:"https://wallpapercave.com/wp/wp2162761.jpg",
        movieCardTitle:"The Wolverine",
        movieCardParagraph:"This movie is related to a zombies and just for fun you can watch it on official website!",
        btn:"Watch",
        WatchingLink:"https://video.search.yahoo.com/search/video;_ylt=AwrJ7JpkTbZfYZMA5Q1XNyoA;_ylu=Y29sbwNiZjEEcG9zAzMEdnRpZANBMDU5OV8xBHNlYwNzYw--?p=the+wolverine&fr=mcafee&turl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOVF.CftkwMkCCC0jRl4eE%252bN2Vw%26amp%3Bpid%3DApi%26w%3D144%26h%3D77%26c%3D7&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Ds15PA750CI8&tit=Carlo+Kemp+-+Wisconsin+Postgame+-+Michigan+Wolverines+Football&w=144&h=78&pos=2&vid=491781666dc8bdbade64ef36bcd1d554&sigr=H1YO79q3fdsE&sigt=RoKYN49WILhC&sigi=1RqGpUa4x6r4",
    },
    {
        movieImgSrc:"https://www.nydailynews.com/resizer/lqf5EX31owPFP6PUuZOfkidSSTQ=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/U43SGBRXWCY3UO3ITSDDYGUDJA.jpg",
        movieCardTitle:"Gettysburg",
        movieCardParagraph:"This movie is related to a zombies and just for fun you can watch it on official website!",
        btn:"Watch",
        WatchingLink:"https://r.search.yahoo.com/_ylt=AwrE1xyDTbZfJLUAtoVXNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZANBMDU5OV8xBHNlYwNzcg--/RV=2/RE=1605811715/RO=10/RU=https%3a%2f%2fen.wikipedia.org%2fwiki%2fGettysburg_Address/RK=2/RS=iYnAltLYiIK390g3u8mRqwuqRdM-",
    },
]
export default MovieCardDetails;