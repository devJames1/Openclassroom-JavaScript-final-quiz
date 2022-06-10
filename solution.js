export class Book {
  constructor(title, author, description, pages, currentPage, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  }
  readBook(page) {
    if (page < 1 || page > this.pages) {
      this.currentPage = 0;
      return this.currentPage;
    } else if (page >= 1 && page < this.pages) {
      this.currentPage = page;
      return 1;
    } else if (page === this.pages) {
      this.currentPage = page;
      this.read = true;
      return 1;
    }
  }
}
const firstBook = new Book(
  'Web Development',
  'Okolie James',
  'A dive into Web Development',
  140,
  0,
  false
);
const secondBook = new Book(
  'SEO',
  'Kasino Ben',
  'Exploring everything about SEO',
  150,
  40,
  false
);
const thirdBook = new Book(
  'Digital Marketing',
  'Benny Walker',
  'Global Market and the importance of Digital Marketing skills',
  160,
  50,
  false
);

firstBook.readBook(firstBook.currentPage);
secondBook.readBook(secondBook.currentPage);
thirdBook.readBook(thirdBook.currentPage);

export const books = [firstBook, secondBook, thirdBook];
