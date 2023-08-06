import { StateSchema } from "@/app/providers/StoreProvider";
import { Article } from "../types/article";
import { ArticleBlockType, ArticleType } from "../const/articleConsts";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "./articleDetailsSelectors";

describe("articleDetailsSelectors.test", () => {
  test("should return article details Data", () => {
    const article: Article = {
      id: "1",
      title: "Гуляние ваших мамок",
      subtitle: "Как я гулял ваших мамок",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Trutovsky_001.jpg/1280px-Trutovsky_001.jpg",
      views: 102,
      createdAt: "19.03.2023",
      user: { id: "1", username: "admin" },
      type: [ArticleType.ART, ArticleType.SCTIENCE],
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
        {
          id: "2",
          type: ArticleBlockType.CODE,
          code: `<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;`,
        },
      ],
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: article,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test("should return is Loading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should work with empty isLoading", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
  });

  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: "you done fucked up boyo",
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual("you done fucked up boyo");
  });

  test("should return undefined getError with empty data", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
