import { Locale } from '@/lib/i18n/types';

interface StaffMember {
  _id: string;
  name: string;
  nameRomaji: string;
  position: string;
  photo: {
    asset: {
      url: string;
    };
    alt: string;
  };
  introduction: string;
  order: number;
}

type StaffContent = {
  [K in Locale]: {
    title: string;
    staff: StaffMember[];
  };
};

export const staffContent: StaffContent = {
  ja: {
    title: "スタッフ紹介",
    staff: [
      {
        _id: "1",
        name: "田中 太郎",
        nameRomaji: "Tanaka Taro",
        position: "代表行政書士",
        photo: {
          asset: {
            url: "/images/staff/tanaka.jpg"
          },
          alt: "田中太郎の写真"
        },
        introduction: "20年以上の実務経験を持ち、特に外国人のビザ申請と企業法務を専門としています。お客様一人ひとりの状況に寄り添い、最適な解決策をご提案いたします。「迅速・丁寧・確実」をモットーに、お客様の夢の実現をサポートします。",
        order: 1
      },
      {
        _id: "2",
        name: "山田 花子",
        nameRomaji: "Yamada Hanako",
        position: "行政書士",
        photo: {
          asset: {
            url: "/images/staff/yamada.jpg"
          },
          alt: "山田花子の写真"
        },
        introduction: "建設業許可、宅建業免許を中心に、不動産・建設関連の許認可申請を専門としています。複雑な申請手続きも、分かりやすくご説明し、スムーズな許可取得をサポートいたします。",
        order: 2
      },
      {
        _id: "3",
        name: "鈴木 次郎",
        nameRomaji: "Suzuki Jiro",
        position: "行政書士",
        photo: {
          asset: {
            url: "/images/staff/suzuki.jpg"
          },
          alt: "鈴木次郎の写真"
        },
        introduction: "法人設立、営業許可申請を専門分野とし、起業家の皆様の事業立ち上げを全面的にサポートしています。会社設立から各種許認可まで、ワンストップでお手伝いいたします。",
        order: 3
      },
      {
        _id: "4",
        name: "佐藤 美咲",
        nameRomaji: "Sato Misaki",
        position: "パラリーガル",
        photo: {
          asset: {
            url: "/images/staff/sato.jpg"
          },
          alt: "佐藤美咲の写真"
        },
        introduction: "書類作成のスペシャリストとして、正確で迅速な申請書類の準備を担当しています。お客様の大切な申請を、細部まで丁寧にサポートいたします。",
        order: 4
      },
      {
        _id: "5",
        name: "グエン・ティ・ハン",
        nameRomaji: "Nguyen Thi Hanh",
        position: "通訳・翻訳スタッフ",
        photo: {
          asset: {
            url: "/images/staff/nguyen.jpg"
          },
          alt: "グエン・ティ・ハンの写真"
        },
        introduction: "ベトナム語と日本語のバイリンガルとして、ベトナム人のお客様の申請サポートを担当しています。言語の壁を感じさせない、親身なサポートを心がけています。",
        order: 5
      },
      {
        _id: "6",
        name: "李 明",
        nameRomaji: "Li Ming",
        position: "通訳・翻訳スタッフ",
        photo: {
          asset: {
            url: "/images/staff/li.jpg"
          },
          alt: "李明の写真"
        },
        introduction: "中国語（北京語・広東語）と日本語の通訳・翻訳を担当しています。中国人のお客様が安心してご相談いただけるよう、文化的な背景も含めて丁寧にサポートいたします。",
        order: 6
      }
    ]
  },
  en: {
    title: "Our Team",
    staff: [
      {
        _id: "1",
        name: "Taro Tanaka",
        nameRomaji: "Tanaka Taro",
        position: "Representative Administrative Scrivener",
        photo: {
          asset: {
            url: "/images/staff/tanaka.jpg"
          },
          alt: "Photo of Taro Tanaka"
        },
        introduction: "With over 20 years of practical experience, specializing in visa applications for foreigners and corporate legal affairs. I provide optimal solutions tailored to each client's situation. With the motto of 'Swift, Careful, and Reliable,' I support the realization of our clients' dreams.",
        order: 1
      },
      {
        _id: "2",
        name: "Hanako Yamada",
        nameRomaji: "Yamada Hanako",
        position: "Administrative Scrivener",
        photo: {
          asset: {
            url: "/images/staff/yamada.jpg"
          },
          alt: "Photo of Hanako Yamada"
        },
        introduction: "Specializing in construction business permits and real estate licenses, focusing on real estate and construction-related licensing applications. I explain complex application procedures clearly and support smooth permit acquisition.",
        order: 2
      },
      {
        _id: "3",
        name: "Jiro Suzuki",
        nameRomaji: "Suzuki Jiro",
        position: "Administrative Scrivener",
        photo: {
          asset: {
            url: "/images/staff/suzuki.jpg"
          },
          alt: "Photo of Jiro Suzuki"
        },
        introduction: "Specializing in corporate establishment and business license applications, providing comprehensive support for entrepreneurs in launching their businesses. I offer one-stop assistance from company establishment to various licenses.",
        order: 3
      },
      {
        _id: "4",
        name: "Misaki Sato",
        nameRomaji: "Sato Misaki",
        position: "Paralegal",
        photo: {
          asset: {
            url: "/images/staff/sato.jpg"
          },
          alt: "Photo of Misaki Sato"
        },
        introduction: "As a document preparation specialist, I am responsible for accurate and prompt preparation of application documents. I carefully support your important applications down to the smallest details.",
        order: 4
      },
      {
        _id: "5",
        name: "Nguyen Thi Hanh",
        nameRomaji: "Nguyen Thi Hanh",
        position: "Interpreter/Translator",
        photo: {
          asset: {
            url: "/images/staff/nguyen.jpg"
          },
          alt: "Photo of Nguyen Thi Hanh"
        },
        introduction: "As a Vietnamese-Japanese bilingual, I handle application support for Vietnamese clients. I strive to provide personal support that eliminates language barriers.",
        order: 5
      },
      {
        _id: "6",
        name: "Li Ming",
        nameRomaji: "Li Ming",
        position: "Interpreter/Translator",
        photo: {
          asset: {
            url: "/images/staff/li.jpg"
          },
          alt: "Photo of Li Ming"
        },
        introduction: "I handle Chinese (Mandarin and Cantonese) and Japanese interpretation and translation. I provide careful support including cultural background so that Chinese clients can consult with peace of mind.",
        order: 6
      }
    ]
  }
};