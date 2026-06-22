# Автозапчасти для китайских авто

Статический сайт-каталог для продажи запчастей китайских автомобилей. Размещается на GitHub Pages, без бэкенда и базы данных.

## Что в комплекте

- `index.html` — главная страница (каталог, бренды, о нас, контакты)
- `style.css` — стили
- `app.js` — логика фильтрации, поиска, переключения языков
- `products.js` — каталог товаров и бренды (редактируйте этот файл, чтобы менять товары)

## Бренды

Changan, Zeekr, JAC, Haval, Hongqi, Chery, Dongfeng, Exeed, Geely, Jetour, Great Wall, Jaecoo, Tank, Li Auto, Jetta, Tenet, Livan.

## Языки

Русский (по умолчанию), қазақша, English. Переключатель в шапке.

## Контакты

WhatsApp / телефон: **+7 777 163 47 47**

Чтобы поменять номер — отредактируйте константы `PHONE`, `PHONE_DISPLAY`, `WHATSAPP` в `app.js` и ссылки в `index.html`.

## Как добавить товар

Откройте `products.js` и добавьте объект в массив `PRODUCTS`:

```js
{
  sku: "ABC-123",
  brand: "chery",          // id из массива BRANDS
  category: "engine",      // id из массива CATEGORIES
  name: {
    ru: "Название по-русски",
    kk: "Атауы қазақша",
    en: "Name in English"
  },
  price: 12500,            // в тенге; null = "цена по запросу"
  badge: "OEM"             // необязательно: бейдж на карточке
}
```

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub (например, `carparts`).
2. Загрузите файлы:
   ```bash
   git init
   git add .
   git commit -m "initial site"
   git branch -M main
   git remote add origin https://github.com/USERNAME/carparts.git
   git push -u origin main
   ```
3. В настройках репозитория откройте **Settings → Pages**.
4. В разделе **Source** выберите `Deploy from a branch`, ветку `main`, папку `/ (root)`.
5. Сайт будет доступен по адресу `https://USERNAME.github.io/carparts/` через 1–2 минуты.

## Локальный просмотр

Откройте `index.html` в браузере двойным кликом — этого достаточно, бэкенд не нужен.
