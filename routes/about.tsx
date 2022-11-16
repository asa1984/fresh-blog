import { ContentMeta } from "@/components/ContentMeta.tsx";
import { Layout } from "@/components/Layout.tsx";
import IconBrandGithub from "tabler-icons-tsx/brand-github.tsx";
import IconBrandTwitter from "tabler-icons-tsx/brand-twitter.tsx";
import { css, tw } from "twind/css";

type quote = { dialogue: string; author: string };

const QUOTES: quote[] = [
  { dialogue: '"ビッグ・ブラザーがあなたを見ている"', author: "1984年" },
  { dialogue: "テメエら全員殺せばよぉ! 借金はパアだぜ!", author: "デンジ" },
  { dialogue: "我が臆病な自尊心と、尊大な羞恥心との所為である。", author: "山月記" },
  { dialogue: "Nvidia, Fuck You!", author: "Linus Torvalds" },
  { dialogue: "Daisy, Daisy, give me your answer do.", author: "HAL9000" },
  { dialogue: "チャカポコチャカポコ……", author: "ドグラ・マグラ" },
  { dialogue: "Guns. Lots of guns.", author: "John Wick" },
  { dialogue: "Guns. Lots of guns.", author: "Neo" },
];

const fontStyle =
  css`font-family: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", serif;`;

export default function AboutPage() {
  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  const { dialogue, author } = QUOTES[randomIndex];
  return (
    <>
      <ContentMeta title="About" description="About this blog" />
      <Layout>
        <article className="mt-12 max-w-lg mx-auto">
          <h1 className="text-center text-4xl font-bold">About</h1>
          <p className="mt-6 max-w-max mx-auto">思考ゴミ箱。おもしろ技術の実験場⚡</p>
          <div className="mt-8 flex justify-center space-x-8">
            <img
              src="/my_god.jpg"
              alt="Very cute cat tail"
              className="w-20 h-20 rounded-1/2 border-2 dark:border-gray-500"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold">Asahi Sato</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                このサイト作った人
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Bio</h2>
            <p className="mt-4">猫とエンジニアのお話を啜って生きている。DenoとTypeScriptが好き。</p>
            <h2 className="mt-6 text-2xl font-bold">Contact</h2>
            <ul role="list" className="mt-4 space-y-2">
              <li className="px-4 py-1 max-w-max rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-800">
                <a
                  href="https://github.com/ASA1984"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex"
                >
                  <IconBrandGithub className="w-5 h-5 my-auto mr-2" />
                  <span className="font-medium">@ASA1984</span>
                </a>
              </li>
              <li className="px-4 py-1 max-w-max rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-800">
                <a
                  href="https://twitter.com/asa_high_ost"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex"
                >
                  <IconBrandTwitter className="w-5 h-5 my-auto mr-2" />
                  <span className="font-medium">@asa_high_ost</span>
                </a>
              </li>
            </ul>
            <h2 className="mt-6 text-2xl font-bold">Motto</h2>
            <div className={tw(fontStyle)}>
              <div className="mt-4 p-4 leading-normal bg-gray-200 dark:bg-gray-700 transition rounded-lg italic">
                <p>{dialogue}</p>
                <p className="text-right">{author}</p>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
}
