import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/services/all.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.page.html',
  styleUrls: ['./latest-news.page.scss'],
})
export class LatestNewsPage implements OnInit {

   resData = {
    "status": "ok",
    "totalResults": 215,
    "articles": [
      {
        "source": {
          "id": null,
          "name": "Finextra"
        },
        "author": "Editorial Team",
        "title": "Strive launches Penny the Pig to teach kids about crypto investing",
        "description": "Strive, the putative UK-based operator of a youth account for kids, has unveiled a crypto-piggy bank that integrates with leading virtual wallets such as thrrose provided by Coinbase.",
        "url": "https://www.finextra.com/newsarticle/37878/strive-launches-penny-the-pig-to-teach-kids-about-crypto-investing",
        "urlToImage": "https://www.finextra.com/finextra-images/top_pics/xl/strive.png",
        "publishedAt": "2021-04-19T09:50:06Z",
        "content": "Strive, the putative UK-based operator of a youth account for kids, has unveiled a crypto-piggy bank that integrates with leading virtual wallets such as thrrose provided by Coinbase.\r\nStrives app an… [+1158 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cointelegraph"
        },
        "author": "Cointelegraph By Helen Partz",
        "title": "China aims to let foreigners use digital yuan at Winter Olympics in 2022",
        "description": "China’s central bank is looking to enable foreign athletes and visitors to use the digital yuan during the Beijing Winter Olympics in 2022, according to a top central bank official.",
        "url": "https://cointelegraph.com/news/china-aims-to-let-foreigners-use-digital-yuan-at-winter-olympics-in-2022",
        "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvY2ZjYjBiNTAtNmFjNi00ZmEwLTk0MDEtY2M2YjkxZGY0YTg3LmpwZw==.jpg",
        "publishedAt": "2021-04-19T09:50:04Z",
        "content": "Chinas central bank is looking to enable foreign athletes and visitors to use the countrys digital currency during the Beijing Winter Olympics in 2022, according to a top central bank official.\r\nLi B… [+2576 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "snagarajan@businessinsider.com (Shalini Nagarajan)",
        "title": "Bitcoin rises above $57,000 after a weekend washout stripped 17% off its price in its biggest drop since February",
        "description": "Its weekend crash followed a frenzy over Coinbase's direct listing and expectations of tighter regulations around the sector.",
        "url": "https://markets.businessinsider.com/currencies/news/why-bitcoin-crashed-over-the-weekend-biggest-drop-since-feb-2021-4-1030316695",
        "urlToImage": "https://images2.markets.businessinsider.com/607d404674da0300181e25db?format=jpeg",
        "publishedAt": "2021-04-19T09:48:15Z",
        "content": "Chesnot/Getty Images\r\nBitcoin rose 2% to above $57,600 on Monday regaining some stability after having fallen by as much as 17% over the weekend, marking its biggest daily drop since February. \r\nThe … [+2264 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "La Tribune.fr"
        },
        "author": null,
        "title": "Bitcoin et les cryptomonnaies ont dévissé de plus de 10%, les vents contraires se renforcent",
        "description": "S'il est encore trop tôt pour parler d'un retournement de tendances sur ces actifs, force est de constater un durcissement de position des institutions monétaires. Plusieurs facteurs externes venus de Turquie et de Chine notamment ont fait temporairement recu…",
        "url": "https://www.latribune.fr/entreprises-finance/banques-finance/industrie-financiere/bitcoin-et-les-cryptomonnaies-ont-devisse-de-plus-de-10-les-vents-contraires-se-renforcent-882669.html",
        "urlToImage": "https://static.latribune.fr/full_width/1165989/bitcoin-devises-mondiales-cryptomonnaies-dollar-euro-livre-sterling.jpg",
        "publishedAt": "2021-04-19T09:37:00Z",
        "content": "Le bitcoin et les 4.000 cryptommonnaies qui s'échangent sur Internet, en dehors de tout système monétaire étatique et centralisé, commencent-ils à faire peur ? Après avoir atteint plus de 64.000 doll… [+4162 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Gizmodo.com"
        },
        "author": "Matt Novak",
        "title": "UK Launches Digital Currency Task Force to Explore the Future of Money",
        "description": "The Bank of England and the UK’s Treasury have launched a task force to explore the use of a national digital currency, the British government announced in several press releases early Monday as part of April 2021 Fintech Week. Read more...",
        "url": "https://gizmodo.com/uk-launches-digital-currency-task-force-to-explore-the-1846710980",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ope2k8fsk8szsbswq7rh.jpg",
        "publishedAt": "2021-04-19T09:30:00Z",
        "content": "The Bank of England and the UKs Treasury have launched a task force to explore the use of a national digital currency, the British government announced in severalpress releases early Monday as part o… [+1911 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Corriere.it"
        },
        "author": "Daniela Polizzi",
        "title": "Bitcoin perde il 12% (in una notte). I blackout in Cina frenano la corsa",
        "description": "Il Tesoro Usa starebbe per inviare a grandi istituti finanziari avvisi di garanzia con l’accusa di riciclaggio tramite criptovalute. Immediata la discesa Bitcoin è arrivato a 46,.480 dollari tra sabato e domenica. Modesto il recupero della valuta, ora è a 47m…",
        "url": "https://www.corriere.it/economia/finanza/21_aprile_19/biden-blackout-cina-frenano-speculazione-bitcoin-perde-12percento-una-notte-570802f4-a0e9-11eb-8f82-b67ef1674282.shtml",
        "urlToImage": "https://images2.corriereobjects.it/methode_image/socialshare/2021/04/19/690311be-a0ea-11eb-8f82-b67ef1674282.jpg",
        "publishedAt": "2021-04-19T09:27:44Z",
        "content": "Il Bitcoin è arrivato a perdere fino al 15,1% nella notte tra sabato e domenica a quota 51.708,51 dollari, segnando il peggior calo intraday da febbraio, secondo i dati riportati da Bloomberg. L’agen… [+2244 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cointelegraph"
        },
        "author": "Cointelegraph By William Suberg",
        "title": "China ‘endorses’ BTC investment: 5 things to watch in Bitcoin this week",
        "description": "A rare seal of approval from the People's Bank of China comes as Bitcoin recovers from a price crash which sent it to $52,000.",
        "url": "https://cointelegraph.com/news/china-endorses-btc-investment-5-things-to-watch-in-bitcoin-this-week",
        "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvMzQyOGJjOTUtMWZmYS00ZmVhLTg0ZTgtYWUzYWIyMTczZjA5LmpwZw==.jpg",
        "publishedAt": "2021-04-19T09:23:35Z",
        "content": "Bitcoin (BTC) is beginning a new week grinding back to $60,000 as the shock of a weekend price crash settles.\r\nAfter dropping to as low as $52,000 in a snap sell-off event, Bitcoin has spent the past… [+6695 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Wired.it"
        },
        "author": "Daniele Monaco",
        "title": "Le 3 ragioni per cui il prezzo del bitcoin e delle altre criptovalute è calato all’improvviso",
        "description": "Dopo aver superato i 64mila dollari la cripto è scesa a circa 52mila. A spingerlo al ribasso un blackout nello Xinjiang, voci di controlli delle autorità Usa su Twitter e l'annoso interrogativo sulle speculazioni \nThe post Le 3 ragioni per cui il prezzo del b…",
        "url": "https://www.wired.it/economia/finanza/2021/04/19/bitcoin-prezzo-criptovalute-blackout-xinjiang/",
        "urlToImage": "https://images.wired.it/wp-content/uploads/2019/07/11214617/Bitcoin-2.jpg",
        "publishedAt": "2021-04-19T09:22:20Z",
        "content": "foto: Pixabay\r\nIl bitcoin ha subito uno scivolone di quasi un quinto del suo valore record nel weekend, bruciando gran parte dei guadagni accumulati la scorsa settimana. Dal vertice di 64.800 dollari… [+2388 chars]"
      },
      {
        "source": {
          "id": "the-irish-times",
          "name": "The Irish Times"
        },
        "author": "The Irish Times",
        "title": "European shares hit highs as markets upbeat about recovery",
        "description": "MSCI world equity index, which tracks shares in 49 countries, was flat on the day",
        "url": "https://www.irishtimes.com/business/markets/european-shares-hit-highs-as-markets-upbeat-about-recovery-1.4541206",
        "urlToImage": "https://www.irishtimes.com/image-creator/?id=1.4541205&origw=1440",
        "publishedAt": "2021-04-19T09:20:57Z",
        "content": "World shares traded near record highs on Monday, as markets were generally upbeat about the prospects for a global economic recovery from Covid-19, ahead of a busy week for earnings.\r\nEuropes Stoxx 6… [+3497 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Bolsamania.com"
        },
        "author": "César Vidal",
        "title": "Wall Street, vacunado contra la pandemia, inicia la semana en máximos históricos",
        "description": "Wall Street anticipa una suave recogida de beneficios tras los máximos históricos marcados el pasado viernes por el Dow Jones y el S&P 500. El principal indicador mundial avanza ya un 11,4% en lo que va de año, lo que indica la apuesta de los inversores por l…",
        "url": "https://www.bolsamania.com/noticias/mercados/wall-street-vacunado-pandemia-inicia-semana-maximos-historicos--7875808.html",
        "urlToImage": "https://img5.s3wfg.com/web/img/images_uploaded/0/c/ep_wall_street_senal.jpg",
        "publishedAt": "2021-04-19T09:20:16Z",
        "content": "Wall Street anticipa una suave recogida de beneficios tras los máximos históricos marcados el pasado viernes por el Dow Jones y el S&amp;P 500. El principal indicador mundial avanza ya un 11,4% en lo… [+2473 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Sabah.com.tr"
        },
        "author": "METE DİRİCE",
        "title": "Bitcoin neden düştü? Kripto para için 4 iddia 4 cevap!",
        "description": "Bitcoin, her geçen gün ilgisini artırırken, kripto para piyasalarında işlem hacminin büyük çoğunluğunu oluşturması nedeniyle yaptığı hareketlerde de diğer alt coinleri doğrudan etkiliyor. 25 Mart tarihinde 50.400 dolar seviyesine kadar gerilemesinin ardından …",
        "url": "https://www.sabah.com.tr/apara/haberler/2021/04/19/bitcoin-neden-dustu-kripto-para-icin-4-iddia-4-cevap",
        "urlToImage": "https://iasbh.tmgrup.com.tr/618970/650/344/0/57/1500/844?u=https://isbh.tmgrup.com.tr/sbh/2021/04/19/bitcoin-neden-dustu-kripto-para-icin-4-iddia-4-cevap-1618822887271.jpg",
        "publishedAt": "2021-04-19T09:17:11Z",
        "content": "DDA 3\r\nDünyann en büyük hacimli kripto para birimi Bitcoin ve dier kripto paralarda yaanan sert düüün, Çin'in incan bölgesindeki elektrik kesintisiyle balantl olduu piyasalarda konuuldu. Dünyann en f… [+588 chars]"
      },
      {
        "source": {
          "id": "t3n",
          "name": "T3n"
        },
        "author": "Jörn Brien",
        "title": "„Investment-Alternative“: China macht beim Bitcoin eine Kehrtwende",
        "description": "China hat seine offizielle Meinung zum Bitcoin offenbar radikal geändert und bewertet die Kryptowährung jetzt als „Investment-Alternative“. Am E-Yuan hält das Land aber fest. Vor vier Jahren hatte China seinen Ton in puncto Kryptowährungen verschärft und zunä…",
        "url": "https://t3n.de/news/invest-alternative-china-bitcoin-1373178/",
        "urlToImage": "https://assets.t3n.sc/news/wp-content/uploads/2021/03/shutterstock-757953895.jpg?auto=format&h=&ixlib=php-2.3.0&w=",
        "publishedAt": "2021-04-19T09:10:42Z",
        "content": "19.04.2021, 11:10 Uhr\r\n Lesezeit: 2 Min.\r\nGerade keine Zeit? Jetzt speichern und später lesen\r\nHinweis: Wir haben in diesem Artikel Provisions-Links verwendet und sie durch \"*\" gekennzeichnet. Erfolg… [+2735 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Techblog.gr"
        },
        "author": "Νίκος Καϊμακάμης",
        "title": "Η μεγαλύτερη πτώση του Bitcoin τους τελευταίους δύο μήνες",
        "description": "To Bitcoin σημείωσε την μεγαλύτερη ημερήσια πτώση του τους τελευταίους δύο μήνες, κυρίως λόγω των υπόλοιπων κρυπτονομισμάτων.\nΗ μεγαλύτερη πτώση του Bitcoin τους τελευταίους δύο μήνες - Techblog",
        "url": "https://techblog.gr/internet/megalyteri-ptosi-bitcoin-toys-teleytaioys-dyo-mines/",
        "urlToImage": "https://techblog.gr/wp-content/uploads/2021/04/bitcoin-statistics.jpg",
        "publishedAt": "2021-04-19T09:10:14Z",
        "content": ", 19/04/2021 · \r\n Bitcoin\r\nTo Bitcoin , . Dogecoin , . \r\n , Bitcoin 11 , . , , Bitcoin , . \r\nBitcoin , . Dogecoin, , … 6000% 2021. \r\n Bitcoin , Tesla. , . \r\nTechblog.gr Google News. RSS Techblog http… [+20 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Clubic"
        },
        "author": "/auteur/350466-cyril-fievet.html",
        "title": "Le Bitcoin, outil privilégié pour financer des activités criminelles ? C'est faux, d'après un rapport d'un ancien patron de la CIA",
        "description": "« L'usage de Bitcoin pour des activités illégales est plutôt limité » : c’est ce que conclut un nouveau rapport américain produit par un ancien patron de la CIA, qui contredit singulièrement les discours officiels associant la crypto-monnaie au crime organisé.",
        "url": "https://www.clubic.com/bitcoin/actualite-368858-le-bitcoin-outil-privilegie-pour-financer-des-activites-criminelles-c-est-faux-d-apres-un-rapport-d-un-ancien-patron-de-la-cia.html",
        "urlToImage": "https://pic.clubic.com/v1/images/1875824/raw?width=900&height=600&fit=max&hash=634144e69fc079332af7e66299a1224930578986",
        "publishedAt": "2021-04-19T09:10:00Z",
        "content": "Depuis sa création en 2009, Bitcoin est irrémédiablement associé à des pratiques illégales. Début 2021, Christine Lagarde, présidente de la Banque centrale européenne, avait plusieurs fois insisté su… [+866 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Clubic"
        },
        "author": "Nerces",
        "title": "Une pénurie de HDD / SSD ? Les cryptos et le proof of space en cause",
        "description": "Parce qu'il n'y a pas de raison qu'un seul segment informatique soit épargné par les pénuries.",
        "url": "https://www.clubic.com/disque-dur-memoire/disques-durs-ssd/actualite-368914-une-penurie-de-hdd-ssd-les-cryptos-et-le-proof-of-space-en-cause.html",
        "urlToImage": "https://pic.clubic.com/v1/images/1811946/raw?width=900&height=600&fit=max&hash=8d37513dab59e62b8552f71f2868710b9d90406c",
        "publishedAt": "2021-04-19T09:10:00Z",
        "content": "Alors que le Bitcoin\r\n, mais pas seulement, est basé sur le proof of work, l'objectif de Chia est de ne plus reposer sur la puissance de composants, et donc leur consommation électrique, pour exister… [+661 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Version2.dk"
        },
        "author": "Louise Olifent",
        "title": "Tyrkiet forbyder kryptovaluta",
        "description": "Tyrkiet vil forbyde betalinger med kryptovaluta efter en stigende global bekymring om betalingsformen. Flere mener, at valutaen er med til at fremme kriminalitet.",
        "url": "https://www.version2.dk/artikel/tyrkiet-forbyder-kryptovaluta-1092486",
        "urlToImage": "https://www.version2.dk/sites/v2/files/styles/large/public/topillustration/2021/04/ankaraviews.jpg?itok=Cq7Gb8Tf",
        "publishedAt": "2021-04-19T09:09:20Z",
        "content": "Centralbanken i Tyrkiet har besluttet at forbyde betalinger med kryptovaluta, da man frygter, anonymiteten kan lede til store tab.\r\nDet skriver Bloomberg.\r\nNyheden kommer i form af et dekret, som ble… [+1178 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Seeking Alpha"
        },
        "author": "Kirk Spano",
        "title": "Meb Faber Talks Dividend Investing, Tail Risk And Bitcoin (Podcast Transcript)",
        "description": "Interview with Meb Faber covering a range of timely investment subjects. Focus on shareholder yield to find the safest dividend stocks",
        "url": "https://seekingalpha.com/article/4418993-meb-faber-talks-dividend-investing-tail-risk-and-bitcoin-podcast-transcript?source=feed_tag_etf_portfolio_strategy",
        "urlToImage": "https://static.seekingalpha.com/uploads/2018/11/21/podcast_series_header.png",
        "publishedAt": "2021-04-19T09:05:00Z",
        "content": "More Let's Talk ETFs Podcasts »\n \r\n\n\r\n\n Editors' Note: This is a transcript of the podcast we posted last week. Please note that due to time and audio constraints, transcription may not be perfect. W… [+41800 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Seeking Alpha"
        },
        "author": "Kirk Spano",
        "title": "Meb Faber Talks Dividend Investing, Tail Risk And Bitcoin (Podcast Transcript)",
        "description": "Interview with Meb Faber covering a range of timely investment subjects. Focus on shareholder yield to find the safest dividend stocks",
        "url": "https://seekingalpha.com/article/4418993-meb-faber-talks-dividend-investing-tail-risk-and-bitcoin-podcast-transcript?source=feed_tag_us",
        "urlToImage": "https://static.seekingalpha.com/uploads/2018/11/21/podcast_series_header.png",
        "publishedAt": "2021-04-19T09:05:00Z",
        "content": "More Let's Talk ETFs Podcasts »\n \r\n\n\r\n\n Editors' Note: This is a transcript of the podcast we posted last week. Please note that due to time and audio constraints, transcription may not be perfect. W… [+41800 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Seeking Alpha"
        },
        "author": "Kirk Spano",
        "title": "Meb Faber Talks Dividend Investing, Tail Risk And Bitcoin (Podcast Transcript)",
        "description": "Interview with Meb Faber covering a range of timely investment subjects. Focus on shareholder yield to find the safest dividend stocks",
        "url": "https://seekingalpha.com/article/4418993-meb-faber-talks-dividend-investing-tail-risk-and-bitcoin-podcast-transcript?source=feed_all_articles",
        "urlToImage": "https://static.seekingalpha.com/uploads/2018/11/21/podcast_series_header.png",
        "publishedAt": "2021-04-19T09:05:00Z",
        "content": "More Let's Talk ETFs Podcasts »\n \r\n\n\r\n\n Editors' Note: This is a transcript of the podcast we posted last week. Please note that due to time and audio constraints, transcription may not be perfect. W… [+41800 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Xataka.com"
        },
        "author": "Jose García",
        "title": "El cofundador de Ethereum ataca al Dogecoin: asegura que es una burbuja que va a explotar propiciada, en parte, por Elon Musk",
        "description": "Elon Musk lleva meses tuiteando sobre Dogecoin y, de paso, disparando su precio. Si en enero de 2021 DOGE tenía un precio de 0,004 dólares, actualmente su valor es de 0,36 dólares y su valor ha crecido un 18.000% con respecto al año pasado. Dicho de otra mane…",
        "url": "https://www.xataka.com/criptomonedas/cofundador-ethereum-ataca-al-dogecoin-asegura-que-burbuja-que-va-a-explotar-propiciada-parte-elon-musk",
        "urlToImage": "https://i.blogs.es/3c1a99/doge/840_560.jpg",
        "publishedAt": "2021-04-19T09:01:49Z",
        "content": "Elon Musk lleva meses tuiteando sobre Dogecoin y, de paso, disparando su precio. Si en enero de 2021 DOGE tenía un precio de 0,004 dólares, actualmente su valor es de 0,36 dólares y su valor ha creci… [+4337 chars]"
      }
    ]
  };
  constructor(public all:AllService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    var param = {
      q:'bitcoin',
      from:'2021-04-19',
      sortBy:'publishedAt',
      apiKey:'8597caf35fc24e5e8c76fb843ae9a197'
    };
    this.all.http.getNews(param).then((res:any) =>{
      console.log(res);
    
      
    }).catch(error => {
      console.log(error);
    });
    console.log(this.resData);
    
  }

}
