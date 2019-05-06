import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'E-commerce',
  //   icon: 'nb-e-commerce',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'nb-home',
  //   link: '/pages/iot-dashboard',
  // },
  {
    title: 'Bakiyeniz: 50 TL',
    group: true,
  },

  {
    title: 'Panelim',
    icon: 'nb-home',
    children: [{
      title: 'Kullanıcılar',
      link: '',
    }],
  },
  {
    title: 'Telefon Rehberi',
    icon: 'nb-home',
    children: [

      {
        title: 'Gruplar',
        link: 'rehber/gruplar',
      },
      {
        title: 'Numara Sepeti',
        link: 'rehber/sepetim',
      },
      {
        title: 'Kişiler',
        link: '',
      },
      {
        title: 'Karaliste',
        link: 'rehber/karaliste',
      },
      {
        title: 'Beyazliste',
        link: 'rehber/beyazliste',
      },

    ],
  },
  {
    title: 'Gelen Kutusu',
    icon: 'nb-home',
    children: [
      {
        title: 'Gelen Kutusu',
        link: '',
      },
      {
        title: 'Otomatik Cevaplama',
        link: '',
      },
      {
        title: 'Mobil Anket',
        link: '',
      },
      {
        title: 'Kurallar',
        link: '',
      },
    ],
  },
  {
    title: 'Sms Gönder',
    icon: 'nb-home',
    children: [
      {
        title: 'Hemen Gönder',
        link: '',
      },
      {
        title: 'Gruplara Gönder',
        link: '',
      },
      {
        title: 'Dosyadan Gönder',
        link: '',
      },
      {
        title: 'Kurallar',
        link: '',
      },
    ],
  },
  {
    title: 'MMS Gönder',
    icon: 'nb-home',
    children: [
      {
        title: 'Hemen Gönder',
        link: '',
      },
      {
        title: 'Gruplara Gönder',
        link: '',
      },
      {
        title: 'Dosyadan Gönder',
        link: '',
      },
      {
        title: 'Kurallar',
        link: '',
      },
    ],
  },
  {
    title: 'Fax Gönder',
    icon: 'nb-home',
    children: [
      {
        title: 'Hemen Gönder',
        link: '',
      },
      {
        title: 'Gruplara Gönder',
        link: '',
      },
      {
        title: 'Dosyadan Gönder',
        link: '',
      },
      {
        title: 'Kurallar',
        link: '',
      },
    ],
  },
  {
    title: 'Raporlar',
    icon: 'nb-home',
    children: [
      {
        title: 'Raporlar',
        link: '',
      },
      {
        title: 'İleri Tarihli Gönderimler',
        link: '',
      },
      {
        title: 'Kurallar',
        link: '',
      },
    ],
  },
  {
    title: 'Kredi İşlemleri',
    icon: 'nb-home',
    children: [
      {
        title: 'Bakiye Yükle',
        link: '',
      },
      {
        title: 'Bekleyen Yüklemeler',
        link: '',
      },
      {
        title: 'Yükleme Geçmişi',
        link: '',
      },
      {
        title: 'Banka Hesap Numaraları',
        link: '',
      },
      {
        title: 'Fatura İşlemlerim',
        link: '',
      },

    ],
  }, {
    title: 'Destek Talepleri',
    icon: 'nb-home',
    children: [{
      title: 'Yeni Destek Talebi',
      link: '',
    },
      {
        title: 'Destek Taleplerim',
        link: '',
      },
      {
        title: 'Api Dökümantasyonu',
        link: '',
      },
    ],
  },
];
