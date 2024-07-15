// libs
import React from "react";
import cn from "classnames";

//types
import { MainProps } from "./main.types";

//styles
import styles from "./main.module.css";
import { Button, Container, Logo, Typography } from "@/components";
import Link from "next/link";

export function Main({ className, children, ...otherProps }: MainProps) {
  return (
    <div className={cn([styles.main, className])} {...otherProps}>
      <Container>
        <div className={styles.head}>
          <Logo className={styles.logo} />
          <div className={styles.text}>
            Представляет самые эффективные авторские продукты в сфере нумерологии и медитаций.
            Создавая этот уникальный продукт, я обьединила все свои знания. Каждый из вас
            обязательно найдет здесь инструменты и методы, которые помогут вам улучшить жизнь.
            Уточняющие вопросы можно задать по номеру + 375 29 181 00 00.
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.item}>
            <img className={styles.image} src="/meditation-big-1.jpg" alt="meditation" />
            <div className={styles.box}>
              <Typography className={styles.itemTitle} variant="title">
                PlutoN Love
              </Typography>
              <Typography className={styles.itemText} variant="text">
                Подобное притягивает подобное. Для того, чтобы в вашу жизнь пришел идеальный партнер
                - нужно находиться на определенных вибрациях. Данная медитация настраивает вас на
                необходимые частоты, которые быстро привлекут вторую половинку.
              </Typography>
              <Link href="/buy-meeting-meditation" legacyBehavior>
                <Button as="a" className={styles.button}>
                  Купить 33 BYN
                </Button>
              </Link>
            </div>
          </div>

          <div className={styles.item}>
            <img className={styles.image} src="/meditation-big-2.png" alt="meditation" />
            <div className={styles.box}>
              <Typography className={styles.itemTitle} variant="title">
                PlutoN Meditation
              </Typography>
              <Typography className={styles.itemText} variant="text">
                Подобное притягивает подобное. Для того, чтобы в вашу жизнь пришел идеальный партнер
                - нужно находиться на определенных вибрациях. Данная медитация настраивает вас на
                необходимые частоты, которые быстро привлекут вторую половинку.
              </Typography>
              <Link href="/buy-pluton-meditation" legacyBehavior>
                <Button className={styles.button} as="a">
                  Купить 170 BYN
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Typography variant={"title"} className={styles.titlePay}>
          Оплата и доступ к курсу
        </Typography>
        <Typography className={styles.payText}>
          После оплаты на сайте банковской платёжной картой через систему WebPay  www.webpay.by, вам
          на почту прийдет логин и пароль для входа в личный кабинет.{" "}
        </Typography>
        <img className={styles.bank} src="/bank.png" alt="bank" />

        <Typography className={styles.payInfo}>
          <div>
            Стоимость Услуг устанавливается Исполнителем в белорусских рублях и размещается на Сайте
            и в Профиле.
          </div>

          <div>
            Безопасный сервер WEBPAY устанавливает шифрованное соединение по защищенному протоколу
            TLS и конфиденциально принимает от клиента данные его платёжной карты (номер карты, имя
            держателя, дату окончания действия, и контрольный номер банковской карточке CVC/CVC2).
          </div>

          <div>
            После совершения оплаты с использованием банковской карты необходимо сохранять
            полученные карт-чеки (подтверждения об оплате) для сверки с выпиской из карт-счёта (с
            целью подтверждения совершённых операций в случае возникновения спорных ситуаций).
          </div>

          <div>
            В случае, если Вы не получили заказ (не оказана услуга), Вам необходимо обратиться (в
            службу технической поддержки) по телефону + 375 29 181 00 00 или e-mail
            yuliyapluto@yandex.ru. Менеджер Вас проконсультирует.
          </div>

          <div>
            При оплате банковской платежной картой возврат денежных средств осуществляется на
            карточку, с которой была произведена оплата.
          </div>

          <div>После оплаты на электронную почту прийдет чек об оплате.</div>
        </Typography>

        <Typography className={styles.cancel} variant="title">
          Отмена заказа
        </Typography>
        <Typography className={styles.cancelText} variant="text">
          После входа покупателем в личный кабинет, услуга считается оказаной в полном объеме.
          Возврату не подлежит.
        </Typography>
        <Typography className={styles.user} variant="title">
          Реквизиты Исполнителя:
        </Typography>

        <Typography variant="text" className={styles.userText}>
          ИП Плюто Юлия Андреевна <br />
          УНП 391632524 <br />
          Почтовый адрес: 211875, г. Поставы <br />
          P/c BY06MTBK30130001093300081963, BY32MTBK30130001015600081964,
          <br /> BY31MTBK30130001084000081965, BY66MTBK30130001064300081966,
          <br /> BY35MTBK30130001097800081967 в ЗАО «МТБанк», БИК MTBKBY22 <br />
          220007, Республика Беларусь, г. Минск, ул. Толстого, 10, кв. 51 <br />
          Тел.: + 375 29 181 00 00 <br />
          E-mail: yuliyapluto@yandex.ru <br />
        </Typography>
      </Container>
    </div>
  );
}
