import { useEffect, useMemo, useState } from "react";
import { tx } from "./language";
import { useLanguage } from "./language-context";

export default function AlmatyClock() {
  const { language } = useLanguage();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Almaty",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
        timeZoneName: "shortOffset",
      }),
    [],
  );
  const parts = Object.fromEntries(
    formatter.formatToParts(now).map(({ type, value }) => [type, value]),
  );
  const hour = Number(parts.hour);
  const minute = Number(parts.minute);
  const second = Number(parts.second);
  const locale =
    language === "ru" ? "ru-RU" : language === "kk" ? "kk-KZ" : "en-GB";
  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        timeZone: "Asia/Almaty",
        weekday: "short",
        day: "2-digit",
        month: "short",
      }),
    [locale],
  );
  const date = dateFormatter.format(now);
  const dayProgress = ((hour * 3600 + minute * 60 + second) / 86400) * 100;

  return (
    <div
      className="hero-clock"
      role="group"
      aria-label={tx(
        language,
        "Live local time in Almaty",
        "Текущее время в Алматы",
        "Алматыдағы ағымдағы уақыт",
      )}
    >
      <div className="clock-heading">
        <span>
          <i />{" "}
          {tx(
            language,
            "LIVE FROM ALMATY",
            "НА СВЯЗИ ИЗ АЛМАТЫ",
            "АЛМАТЫДАН ТІКЕЛЕЙ",
          )}
        </span>
        <span>{parts.timeZoneName}</span>
      </div>
      <div className="clock-main">
        <span className="clock-hours">
          {parts.hour}:{parts.minute}
        </span>
        <span className="clock-seconds" key={parts.second}>
          {parts.second}
        </span>
      </div>
      <div className="clock-details">
        <span>
          {tx(language, "LOCAL TIME", "МЕСТНОЕ ВРЕМЯ", "ЖЕРГІЛІКТІ УАҚЫТ")}
        </span>
        <span>{date.toUpperCase()}</span>
      </div>
      <div className="clock-day">
        <div className="clock-day-label">
          <span>
            {tx(
              language,
              "A DAY IN PROGRESS",
              "ДЕНЬ В ПРОЦЕССЕ",
              "КҮН ЖАЛҒАСУДА",
            )}
          </span>
          <span>
            {String(hour).padStart(2, "0")}:{String(minute).padStart(2, "0")}
          </span>
        </div>
        <div className="clock-day-track">
          <i style={{ width: `${dayProgress}%` }} />
        </div>
        <div className="clock-day-scale">
          <span>00:00</span>
          <span>24:00</span>
        </div>
      </div>
      <div className="clock-focus">
        <span>
          {tx(language, "CURRENT RHYTHM", "МОЙ РИТМ СЕЙЧАС", "ҚАЗІРГІ ЫРҒАҒЫМ")}
        </span>
        <b>
          {tx(
            language,
            "LEARNING · BUILDING · REFINING",
            "УЧУСЬ · СОЗДАЮ · СОВЕРШЕНСТВУЮ",
            "ҮЙРЕНУ · ЖАСАУ · ЖЕТІЛДІРУ",
          )}
        </b>
      </div>
    </div>
  );
}
