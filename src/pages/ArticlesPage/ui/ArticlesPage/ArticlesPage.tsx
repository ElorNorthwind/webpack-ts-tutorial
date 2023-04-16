import { FC, memo } from "react";
// import { useTranslation } from "react-i18next";
import { ArticleList } from "entities/Article";
import {
  Article,
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from "entities/Article/model/types/article";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const article: Article = {
  id: "1",
  title: "Гуляние ваших мамок",
  subtitle: "Как я гулял ваших мамок",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Trutovsky_001.jpg/1280px-Trutovsky_001.jpg",
  views: 102,
  createdAt: "19.03.2023",
  user: {
    id: "1",
    username: "admin",
    avatar: "https://i.imgur.com/lzpIrMo.png",
  },
  type: [ArticleType.SCTIENCE],
  blocks: [
    {
      id: "1",
      type: ArticleBlockType.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
      ],
    },
  ],
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  // const { t } = useTranslation();

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      <ArticleList
        articles={new Array(16).fill(0).map((item, index) => ({
          ...article,
          id: String(index),
        }))}
        view={ArticleView.BIG}
        isLoading={true}
      />
    </div>
  );
};

export default memo(ArticlesPage);
