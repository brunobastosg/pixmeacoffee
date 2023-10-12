import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AccountFormInterface } from "@/app/context/AccountFormContext";

interface CardBadgeInterface {
  user: any;
  data: AccountFormInterface;
  socialLinks: {
    link: string;
    name: string;
    svg: React.ReactNode;
  }[];
}

export default function CardBadge(props: CardBadgeInterface) {
  return (
    <div className="flex flex-col w-80 bg-transparent">
      <Image
        src="/dash.svg"
        alt="Cordao azul do cracha"
        width={100}
        height={100}
        className="ml-28"
        style={{ marginTop: "-20px", zIndex: "1", marginBottom: "-24px" }}
        priority
      />
      <div className="flex flex-col w-80 bg-white rounded-2xl shadow-xl px-4 pb-4">
        <div className="w-full h-8 flex justify-center items-center">
          <div className="bg-gray-300 w-16 h-4 rounded-full shadow-inner"></div>
        </div>
        <div className="flex w-full h-16">
          <Image
            src={props.user?.photoURL || ""}
            alt="Foto do usuario"
            className="w-14 h-14 rounded-full cursor-pointer bg-primary-500 p-1"
            width={80}
            height={80}
            priority
          />
          <div className="ml-2">
            <p className="text-xl">{props.user?.displayName}</p>
            {props.data.page.length > 0 ? (
              <p className="text text-gray-500">
                <span className="text-primary-500">/</span>
                {props.data?.page}
              </p>
            ) : (
              <p className="text text-gray-300">/suapagina</p>
            )}
          </div>
        </div>
        {props.data.description.length > 0 ? (
          <div className="flex w-full p-4">
            <p
              className="text-sm text-gray-500 font-normal break-words max-w-full"
              style={{
                fontSize: "12px",
                lineHeight: "1rem",
                wordWrap: "break-word",
              }}>
              {props.data.description}
            </p>
          </div>
        ) : (
          <></>
        )}
        <div className="w-full h-16">
          <div className="flex justify-center items-center w-full gap-8 h-12 cursor-pointer">
            {props.socialLinks?.map((item) => (
              <>
                <Link key={item.name} href={item.link}>
                  {item.svg}
                </Link>
              </>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div>
            <p>
              Me apoie com a quantia que quiser. <br />{" "}
            </p>
            <p className="text-sm text-gray-500">
              <span className="text-primary-500">Via pix</span>. Receberei 100%
              desse valor :)
            </p>
          </div>
          {props.data.pixKey.length > 20 ? (
            <>
              <Image
                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${props.data.pixKey}`}
                alt="Pix me a coffe escrito com coracoes azuis rodeando."
                width={250}
                height={250}
                priority
              />
            </>
          ) : (
            <>
              <Image
                src={"/waiting.gif"}
                className="rounded shadow"
                alt="Pix me a coffe escrito com coracoes azuis rodeando."
                width={250}
                height={250}
                priority
              />
              <p className="text-sm text-gray-900 ml-4">
                Cole a <span className="text-primary-500">chave aleatória pix</span>{" "}
                para gerarmos seu qr-code.
              </p>
            </>
          )}
          <Image
            src={"pixmeacoffee.svg"}
            alt="Pix me a coffe escrito com coracoes azuis rodeando."
            width={120}
            height={120}
            priority
          />
        </div>
      </div>
    </div>
  );
}
