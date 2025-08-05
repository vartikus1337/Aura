import {
  createContext,
  useContext,
  useRef,
  useState,
  type FC,
  type ReactNode,
} from "react";
import { useWindowWidth } from "./hooks/useWindowWidth";

/** Показывает является ли текущее устройстов мобильным */
const ViewSize = createContext<boolean>(false);

const MOBILE_WIDTH = 320;

const NEW_STICKERS = [
  ["imgs/ghost1.png", "imgs/ghost2.png"],
  ["imgs/sticker1.png"],
  ["imgs/sticker2.png"],
  ["imgs/infinity.png", "imgs/iamdesigner.png"],
  ["imgs/global.png", "imgs/sticker3.png"],
  ["imgs/newwave.png"],
] as const;

const TOP_STICKERS = [
  {
    img: "imgs/holofobia1.png",
    avatar: "imgs/ttgs_avatar.png",
    author: "ttgs",
    name: "Holofobia1",
    price: "4.70 ETH",
    amount: "($16,873.47)",
  },
  {
    img: "imgs/yeee.png",
    avatar: "imgs/tat2_avatar.png",
    author: "Tat_2",
    name: "Y.EEE",
    price: "3.00 ETH",
    amount: "($10,731.24)",
  },
  {
    img: "imgs/baby_yoda.png",
    avatar: "imgs/chris22_avatar.png",
    author: "Chris22",
    name: "Baby Joda",
    price: "2.00 ETH",
    amount: "($7,121.04)",
  },
  {
    img: "imgs/infinity_09.png",
    avatar: "imgs/oswaald_avatar.png",
    author: "Oswaald",
    name: "Infinity_09",
    price: "1.6109 ETH",
    amount: "($5,762.32)",
  },
  {
    img: "imgs/sadsadsad.png",
    avatar: "imgs/paul-22_avatar.png",
    author: "Paul-22",
    name: "Sadsadsad",
    price: "1.50 ETH",
    amount: "($5,365.62)",
  },
  {
    img: "imgs/attntn.png",
    avatar: "imgs/wardxxx_avatar.png",
    author: "ttgs",
    name: "Attntn",
    price: "1.0 ETH",
    amount: "($3,577.08)",
  },
] as const;

const Button: FC<{ cls?: string; children: ReactNode; width?: number }> = ({
  cls,
  width,
  children,
}) => (
  <button
    style={{ width }}
    className={
      !width
        ? `rounded-[40px] w-fit p-[39px] pt-[13px] pb-[13px] md:w-fit md:h-fit md:pl-btn-x md:pr-btn-x md:pt-btn-y md:pb-btn-y${cls ? ` ${cls}` : ""} font-muller-b`
        : `rounded-[40px] pt-[13px] pb-[13px] md:h-fit md:pl-btn-x md:pr-btn-x md:pt-btn-y md:pb-btn-y${cls ? ` ${cls}` : ""} font-muller-b`
    }
  >
    {children}
  </button>
);

const Header = () => {
  const isMobile = useContext(ViewSize);

  return (
    <header className="flex-col">
      <div className="flex justify-between p-3">
        <img className="w-[75px] md:w-[100px]" src="svg/aura.svg" />
        {isMobile && (
          <img className="w-9" src="svg/account_balance_wallet.svg" />
        )}
      </div>
      <nav className="border-t-1 border-gray flex justify-between p-3 ">
        <a className="font-bold">Авторы</a>
        <a className="font-bold">Коллекции</a>
        <a className="font-bold">Сервисы</a>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <div className="bg-black flex-col pt-16">
      <div className="flex flex-col p-3 gap-4 pb-16">
        <h1 className="text-white text-[35px] font-russo">
          Площадка для реализации криптостикеров
        </h1>
        <Button cls="gradient-btn">Купить</Button>
        <Button width={164} cls="gradient-border-btn text-white">
          Стать автором
        </Button>
      </div>
      <img src="imgs/stickers_hero.png" />
    </div>
  );
};

const CurrentAuction = () => {
  return (
    <div className="pl-3 pr-3">
      <div className="flex items-center gap-[15px]">
        <h1 className="text-[30px] font-russo">Аукцион</h1>
        <div className="flex items-center gap-1 p-2 pl-3.5 pr-3.5 border-2 rounded-[40px] border-red border-solid">
          <img src="svg/ellipse.svg" />
          <div className="text-red font-muller-b text-base">Live auction</div>
        </div>
      </div>
      <img className="mt-8 mb-8" src="imgs/witcher.png" />
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 bg-gray-light p-4 pt-[11px] pb-[11px] rounded-[18px] w-fit font-muller-b">
          <img src="imgs/avatar.png" />
          SergeVM_222
        </div>
        <h2 className="font-muller text-3xl">Witcherrr_3 (xml_t5)</h2>
        <div className="font-muller-b flex flex-col p-4 pr-7 rounded-[18px] bg-gray-light w-fit gap-1">
          <p>Ставка:</p>
          <h1 className="text-3xl">0.10 ETH</h1>
          <h3 className="text-gray-middle">$351.24</h3>
        </div>
        <div className="flex flex-col text-white font-muller-b bg-black w-fit rounded-[18px] p-4 gap-4">
          <p>Окончание через:</p>
          <div className="flex gap-6">
            <div className="flex flex-col gap-1.5">
              <span className="text-3xl">01</span>
              <span>Час</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-3xl">48</span>
              <span>Мин</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-3xl">47</span>
              <span>Сек</span>
            </div>
          </div>
        </div>
      </div>
      <Button cls="bg-primary mt-8">Сделать ставку</Button>
    </div>
  );
};

const CardSticker = () => {
  return (
    <div>
      <div className="pt-[7px] pb-[7px] pl-[68px] pr-[68px] bg-gray-light rounded-t-[40px]">
        <img src="imgs/alien.png" />
      </div>
      <div className="bg-black text-white h-[168px] w-[296px] rounded-b-[40px] p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 font-muller-b">
            <img src="imgs/avatar2.png" />
            Frank.Nagval
          </div>
          <h2 className="font-muller-b text-xl/5">Alien (green) e_e</h2>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="font-muller-b text-primary text-xl/5">0.02 ETH</h2>
          <h3 className="font-muller-b text-gray-middle leading-4">
            03 часа 25 мин 23 сек
          </h3>
        </div>
      </div>
    </div>
  );
};

const Auctions = () => {
  return (
    <div className="pl-3 pr-3 flex flex-col gap-8">
      <h1 className="text-[20px] font-russo">Другие аукционы</h1>
      <div className="flex flex-col">
        <CardSticker />
        <div className="flex justify-center mt-4 gap-2">
          <img src="svg/ellipse_primary.svg" />
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <img src="svg/ellipse_gray.svg" key={i} />
            ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button cls="border-[5px] border-primary">Все аукционы</Button>
      </div>
    </div>
  );
};

const NewStickers = () => {
  const [activeStikers, setActiveStickers] = useState(0);

  return (
    <div className="h-[356px] w-full bg-black text-white pl-3 pt-8">
      <h1 className="text-3xl font-russo">🔥 Новые стикеры</h1>
      <div className="flex gap-8 pt-8 pb-8">
        {NEW_STICKERS[activeStikers].map((path, idx) => (
          <img
            className="animate-fadeIn duration-1000 delay-200"
            src={path}
            key={`${activeStikers}-${idx}`}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-3">
        {Array(NEW_STICKERS.length)
          .fill(0)
          .map((_, i) => (
            <span
              className={`font-muller flex items-center justify-center rounded-[40px] border-2 border-red text-xs/3 w-9 h-7${activeStikers === i ? " bg-red" : ""}`}
              key={i}
              onClick={() => setActiveStickers(i)}
            >
              {i + 1}
            </span>
          ))}
      </div>
    </div>
  );
};

const Subscriber = () => {
  return (
    <div className="bg-red text-white pb-0 p-3 flex flex-col gap-4 w-full">
      <h1 className="font-russo">
        Будь в курсе новинок! <br />
        Подпишись на рассылку!
      </h1>
      {["Имя", "E-mail"].map((v) => (
        <input
          className="font-muller w-full bg-black p-8 pt-[17px] pb-[17px] rounded-[40px] placeholder-gray-light"
          placeholder={v}
          key={v}
        />
      ))}
      <Button cls="bg-primary text-black">Подписаться</Button>
      <div className="flex">
        <input type="checkbox" className="mr-2" />
        <p className="font-muller text-nowrap font-bold text-[11px]">
          Согласен на обработку персональных данных
        </p>
      </div>
      <img src="imgs/pack_ok.png" />
    </div>
  );
};

const Join = () => {
  const loadRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-4 p-3">
      <h1 className="font-russo text-3xl">Стать автором</h1>
      <p>
        Отправь нам от трёх до пяти своих работ и напиши свой ник в телеграме.
        Если наши кураторы решат, что нам по пути, то мы обязательно свяжемся с
        тобой и обговорим условия сотрудничества! <b>Удачи!</b>
      </p>
      <img src="imgs/example_pack.png" />
      <input ref={loadRef} hidden type="file" />
      <div
        className="bg-gray-light flex flex-col items-center p-[47px] rounded-[40px] gap-4"
        onClick={() => loadRef.current?.click()}
      >
        <img src="svg/plus_file.svg" width={60} />
        <p className="font-muller text-gray-middle text-nowrap">
          Прикрепить работы (.jpeg / .png)
        </p>
      </div>
      <input
        className="bg-gray-light pl-8 p-[17px] rounded-[40px]"
        placeholder="@telegram_nickname"
      />
      <Button cls="bg-primary">Отправить</Button>
    </div>
  );
};

const TopCardSticker: FC<{
  img: string;
  avatar: string;
  author: string;
  name: string;
  price: string;
  amount: string;
}> = ({ img, avatar, author, name, price, amount }) => {
  return (
    <div className="w-fit">
      <div className="bg-gray-light p-3 pb-0 rounded-t-[22px]">
        <img src={img} className="w-[108px]" />
      </div>
      <div className="bg-white p-4 rounded-b-[22px] font-muller-b">
        <div className="flex gap-2">
          <img src={avatar} />
          {author}
        </div>
        <h2 className="mt-2 leading-5">{name}</h2>
        <h3 className="mt-[5px] text-xs/3">{price}</h3>
        <h4 className="mt-[5px] text-xs/3 text-gray-middle">{amount}</h4>
      </div>
    </div>
  );
};

const TopStickers = () => {
  return (
    <div className="bg-black p-8 pl-3 pr-3 w-full">
      <h1 className="text-white font-russo text-3xl">Топ продаж</h1>
      <div className="w-full mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
        {TOP_STICKERS.map((sticker) => (
          <TopCardSticker {...sticker} />
        ))}
      </div>
    </div>
  );
};

const Rules = () => {
  return (
    <div className="bg-gray-deep text-white font-muller p-8 pl-3 pr-3">
      <h1 className="font-muller-b text-2xl">
        Для попадания в топ необходимо:
      </h1>
      <ul className="flex flex-col gap-4 mt-4">
        <li className="flex gap-2 h-8 leading-4">
          <img src="svg/img.svg" />
          Минимум пять опубликованных работ
        </li>
        <li className="flex items-center gap-2 h-8 leading-4">
          <img src="svg/smile.svg" />
          Инвайт трём коллегам по цеху
        </li>
        <li className="flex items-center gap-2 h-8 leading-4">
          <img src="svg/apply.svg" />
          Верифицированный аккаунт
        </li>
      </ul>
      <img className="mt-8" src="imgs/sticker_pack.png" />
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary flex flex-col items-center">
        <img className="m-5" src="svg/aura.svg" width={75} />
        <nav className="border-t w-full p-3 pt-[10px] pb-[10px] flex justify-between font-muller-b">
          <a>Соглашение</a>
          <a>Лицензия</a>
          <a>FAQ</a>
        </nav>
      </div>
      <div className="bg-black text-white text-center">AURA® | 2021</div>
    </footer>
  );
};

export const App = () => {
  const windth = useWindowWidth();
  return (
    <>
      <ViewSize value={windth <= MOBILE_WIDTH}>
        <Header />
      </ViewSize>
      <div className="flex flex-col gap-20">
        <Hero />
        <CurrentAuction />
        <Auctions />
        <NewStickers />
      </div>
      <div className="flex flex-col gap-20">
        <Subscriber />
        <Join />
        <TopStickers />
      </div>
      <Rules />
      <Footer />
    </>
  );
};
