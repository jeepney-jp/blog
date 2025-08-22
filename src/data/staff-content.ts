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
  },
  'zh-CN': {
    title: "员工介绍",
    staff: [
      {
        _id: "1",
        name: "田中 太郎",
        nameRomaji: "Tanaka Taro",
        position: "代表行政书士",
        photo: {
          asset: {
            url: "/images/staff/tanaka.jpg"
          },
          alt: "田中太郎的照片"
        },
        introduction: "拥有20年以上的实务经验，专业领域为外国人签证申请和企业法务。为每一位客户的情况量身定制最佳解决方案。以\"迅速、细致、可靠\"为座右铭，支持客户实现梦想。",
        order: 1
      },
      {
        _id: "2",
        name: "山田 花子",
        nameRomaji: "Yamada Hanako",
        position: "行政书士",
        photo: {
          asset: {
            url: "/images/staff/yamada.jpg"
          },
          alt: "山田花子的照片"
        },
        introduction: "以建设业许可、房地产业许可为中心，专业处理不动产、建设相关的许可认证申请。对于复杂的申请手续，能够通俗易懂地进行说明，支持客户顺利取得许可。",
        order: 2
      },
      {
        _id: "3",
        name: "铃木 次郎",
        nameRomaji: "Suzuki Jiro",
        position: "行政书士",
        photo: {
          asset: {
            url: "/images/staff/suzuki.jpg"
          },
          alt: "铃木次郎的照片"
        },
        introduction: "以法人设立、营业许可申请为专业领域，全面支持创业者的事业启动。从公司设立到各种许可认证，提供一站式服务。",
        order: 3
      },
      {
        _id: "4",
        name: "佐藤 美咲",
        nameRomaji: "Sato Misaki",
        position: "律师助理",
        photo: {
          asset: {
            url: "/images/staff/sato.jpg"
          },
          alt: "佐藤美咲的照片"
        },
        introduction: "作为文件制作专家，负责准确迅速地准备申请文件。对客户重要的申请，提供细致入微的周到支持。",
        order: 4
      },
      {
        _id: "5",
        name: "阮氏韩",
        nameRomaji: "Nguyen Thi Hanh",
        position: "口译・翻译员",
        photo: {
          asset: {
            url: "/images/staff/nguyen.jpg"
          },
          alt: "阮氏韩的照片"
        },
        introduction: "作为越南语和日语的双语人员，负责为越南客户提供申请支持。致力于提供让客户感受不到语言障碍的贴心服务。",
        order: 5
      },
      {
        _id: "6",
        name: "李 明",
        nameRomaji: "Li Ming",
        position: "口译・翻译员",
        photo: {
          asset: {
            url: "/images/staff/li.jpg"
          },
          alt: "李明的照片"
        },
        introduction: "负责中文（普通话・广东话）和日语的口译、翻译工作。为了让中国客户能够安心咨询，包括文化背景在内提供细致的支持。",
        order: 6
      }
    ]
  },
  'zh-TW': {
    title: "員工介紹", 
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
          alt: "田中太郎的照片"
        },
        introduction: "擁有20年以上的實務經驗，專業領域為外國人簽證申請和企業法務。為每一位客戶的情況量身定製最佳解決方案。以\"迅速、細致、可靠\"為座右銘，支持客戶實現夢想。",
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
          alt: "山田花子的照片"
        },
        introduction: "以建設業許可、房地產業許可為中心，專業處理不動產、建設相關的許可認證申請。對於複雜的申請手續，能夠通俗易懂地進行說明，支持客戶順利取得許可。",
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
          alt: "鈴木次郎的照片"
        },
        introduction: "以法人設立、營業許可申請為專業領域，全面支持創業者的事業啟動。從公司設立到各種許可認證，提供一站式服務。",
        order: 3
      },
      {
        _id: "4",
        name: "佐藤 美咲",
        nameRomaji: "Sato Misaki",
        position: "律師助理",
        photo: {
          asset: {
            url: "/images/staff/sato.jpg"
          },
          alt: "佐藤美咲的照片"
        },
        introduction: "作為文件製作專家，負責準確迅速地準備申請文件。對客戶重要的申請，提供細致入微的周到支持。",
        order: 4
      },
      {
        _id: "5",
        name: "阮氏韓",
        nameRomaji: "Nguyen Thi Hanh",
        position: "口譯・翻譯員",
        photo: {
          asset: {
            url: "/images/staff/nguyen.jpg"
          },
          alt: "阮氏韓的照片"
        },
        introduction: "作為越南語和日語的雙語人員，負責為越南客戶提供申請支持。致力於提供讓客戶感受不到語言障礙的貼心服務。",
        order: 5
      },
      {
        _id: "6",
        name: "李 明",
        nameRomaji: "Li Ming",
        position: "口譯・翻譯員",
        photo: {
          asset: {
            url: "/images/staff/li.jpg"
          },
          alt: "李明的照片"
        },
        introduction: "負責中文（普通話・廣東話）和日語的口譯、翻譯工作。為了讓中國客戶能夠安心諮詢，包括文化背景在內提供細致的支持。",
        order: 6
      }
    ]
  },
  vi: {
    title: "Giới thiệu nhân viên",
    staff: [
      {
        _id: "1",
        name: "田中 太郎",
        nameRomaji: "Tanaka Taro",
        position: "Đại diện Hành chính thư ký",
        photo: {
          asset: {
            url: "/images/staff/tanaka.jpg"
          },
          alt: "Ảnh của Tanaka Taro"
        },
        introduction: "Với hơn 20 năm kinh nghiệm thực tế, chuyên về đơn xin visa cho người nước ngoài và pháp lý doanh nghiệp. Đề xuất giải pháp tối ưu phù hợp với tình huống của từng khách hàng. Với phương châm \\\"Nhanh chóng, Chu đáo, Đáng tin cậy\\\", hỗ trợ khách hàng thực hiện ước mơ.",
        order: 1
      },
      {
        _id: "2",
        name: "山田 花子",
        nameRomaji: "Yamada Hanako",
        position: "Hành chính thư ký",
        photo: {
          asset: {
            url: "/images/staff/yamada.jpg"
          },
          alt: "Ảnh của Yamada Hanako"
        },
        introduction: "Chuyên về giấy phép kinh doanh xây dựng và giấy phép bất động sản, xử lý các đơn xin giấy phép liên quan đến bất động sản và xây dựng. Giải thích các thủ tục phức tạp một cách dễ hiểu, hỗ trợ khách hàng có được giấy phép một cách thuận lợi.",
        order: 2
      },
      {
        _id: "3",
        name: "鈴木 次郎",
        nameRomaji: "Suzuki Jiro",
        position: "Hành chính thư ký",
        photo: {
          asset: {
            url: "/images/staff/suzuki.jpg"
          },
          alt: "Ảnh của Suzuki Jiro"
        },
        introduction: "Chuyên về thành lập pháp nhân và đơn xin giấy phép kinh doanh, hỗ trợ toàn diện việc khởi nghiệp của các doanh nhân. Cung cấp dịch vụ một cửa từ thành lập công ty đến các giấy phép khác nhau.",
        order: 3
      },
      {
        _id: "4",
        name: "佐藤 美咲",
        nameRomaji: "Sato Misaki",
        position: "Trợ lý luật sư",
        photo: {
          asset: {
            url: "/images/staff/sato.jpg"
          },
          alt: "Ảnh của Sato Misaki"
        },
        introduction: "Là chuyên gia về chuẩn bị tài liệu, chịu trách nhiệm chuẩn bị các tài liệu đơn xin chính xác và nhanh chóng. Hỗ trợ tỉ mỉ các đơn xin quan trọng của khách hàng đến từng chi tiết.",
        order: 4
      },
      {
        _id: "5",
        name: "Nguyễn Thị Hạnh",
        nameRomaji: "Nguyen Thi Hanh",
        position: "Nhân viên phiên dịch・dịch thuật",
        photo: {
          asset: {
            url: "/images/staff/nguyen.jpg"
          },
          alt: "Ảnh của Nguyễn Thị Hạnh"
        },
        introduction: "Là người song ngữ tiếng Việt và tiếng Nhật, chịu trách nhiệm hỗ trợ đơn xin cho khách hàng Việt Nam. Cố gắng cung cấp dịch vụ hỗ trợ tận tình mà không làm khách hàng cảm thấy rào cản ngôn ngữ.",
        order: 5
      },
      {
        _id: "6",
        name: "李 明",
        nameRomaji: "Li Ming",
        position: "Nhân viên phiên dịch・dịch thuật",
        photo: {
          asset: {
            url: "/images/staff/li.jpg"
          },
          alt: "Ảnh của Li Ming"
        },
        introduction: "Chịu trách nhiệm phiên dịch và dịch thuật tiếng Trung (tiếng Quan Thoại・tiếng Quảng Đông) và tiếng Nhật. Để khách hàng Trung Quốc có thể tư vấn một cách yên tâm, cung cấp hỗ trợ tỉ mỉ bao gồm cả bối cảnh văn hóa.",
        order: 6
      }
    ]
  }
};