# Star Route Proxy 🌟

Star Route Proxy, gelen istekleri farklı hedeflere yönlendirmek için kullanılan bir Node.js modülüdür. Bu modül, bir alan adı belirli bir hedefe yönlendirilirken, diğer alan adları farklı hedeflere yönlendirilir.

## Kurulum

Star Route Proxy modülünü projenize eklemek için npm veya yarn kullanabilirsiniz:

```bash
npm install star-route-proxy
```

veya

```bash
yarn add star-route-proxy
```

## Kullanım

```javascript
const StarRouteProxy = require('star-route-proxy');

// Yönlendirme ayarları
const routes = [
    { domain: 'example.com', target: 'http://localhost:3000' },
    { domain: 'api.example.com', target: 'http://localhost:4000' },
    // Daha fazla yönlendirme ekleyebilirsiniz
];

// StarRouteProxy örneğini oluşturun
const proxy = new StarRouteProxy(routes);

// Hata ve loglama olaylarını dinlemek için
proxy.on('error', (error) => {
    console.error('Hata:', error);
});

proxy.on('log', (log) => {
    console.log('Log:', log);
});

// Proxy'yi belirtilen bir portta dinlemek için
const PORT = 8080;
proxy.listen(PORT, () => {
    console.log(`Star Route Proxy çalışıyor. Port: ${PORT}`);
});
```

## Özellikler

- Gelen istekleri belirtilen hedeflere yönlendirir.
- Farklı alan adları farklı hedeflere yönlendirilebilir.
- Hedef veya alan adı bulunamadığında özel hata sayfaları gösterir.

## Loglama ve Hata İşleme

Star Route Proxy, 'log' ve 'error' olaylarını dinleyerek loglama ve hata işleme sağlar. Aşağıdaki örnekte, bu olayları nasıl dinleyeceğinizi görebilirsiniz:

```javascript
// Hata ve loglama olaylarını dinlemek için
proxy.on('error', (error) => {
    console.error('Hata:', error);
});

proxy.on('log', (log) => {
    console.log('Log:', log);
});
```

## Katkıda Bulunma

Her türlü katkıyı memnuniyetle karşılıyoruz! Projeyle ilgili herhangi bir sorunuzu veya geri bildiriminizi [GitHub](https://github.com/your-username/star-route-proxy) üzerinden iletebilirsiniz.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına göz atabilirsiniz.

---