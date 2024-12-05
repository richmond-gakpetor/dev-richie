import Heading from "@/components/Heading";
import Section from "@/components/Section";
import Link from "next/link";
import { Book } from "lucide-react";

interface BookType {
  title: string;
  author: string;
  coverImage?: string;
  progress: number; 
  link?: string;
  genre: string[];
}

const currentlyReading: BookType[] = [
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    progress: 40,
    genre: ["Software Architecture", "Design Patterns"],
  },
  {
    title: "Principles of Web API Design",
    author: "James Higginbotham",
    progress: 30,
    genre: ["API Design", "Web Development"],
  },
  {
    title: "The DynamoDB Book",
    author: "Alex Debrie",
    progress: 25,
    genre: ["Database", "AWS","NoSQL"],
  },
  // {
  //   title: "The Pragmatic Programmer",
  //   author: "David Thomas, Andrew Hunt",
  //   progress: 0,
  //   genre: ["Programming", "Software Engineering"],
  // },
  
];

const Books = () => {
  const books = currentlyReading.map((book, index) => (
    <figure
      key={index}
      className="border border-[#ffffff36] bg-card rounded-lg mb-4 animation sm:max-w-[18.75rem] relative"
    >
      <div className="rounded-lg transition-all p-4 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-2">
          <Book className="w-6 h-6" />
          {book.link ? (
            <Link
              href={book.link}
              target="_blank"
              className="hover:opacity-80 underline tracking-wide text-xl font-bold"
            >
              {book.title}
            </Link>
          ) : (
            <span className="tracking-wide text-xl font-bold">
              {book.title}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm opacity-60">by {book.author}</p>

          {/* Progress bar */}
          <div className="w-full bg-secondary/20 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: `${book.progress}%` }}
            ></div>
          </div>
          <p className="text-xs opacity-60">{book.progress}% complete</p>

          {/* Genres/Tags */}
          <div className="flex flex-wrap gap-1 mt-2">
            {book.genre.map((tag, i) => (
              <div
                key={i}
                className="transition-all hover:opacity-80 bg-secondary/20 rounded-lg px-2 py-1 text-xs"
              >
                #{tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  ));

  return (
    <Section sectionName="books" className="spacing pb-28 lg:pb-0">
      <article className="flex flex-col gap-16">
        <Heading text="#books." />

        <div>
          <p className="opacity-20 text-lg">&#60;p&#62;</p>
          <p className="paragraph ml-4">
            Here are the books I'm currently reading or on my list of to-read. <br /><em>"Be so good they can't ignore you" - Steve Martin</em>
          </p>
          <p className="opacity-20 text-lg">&#60;&#47;p&#62;</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {books}
        </div>
      </article>
    </Section>
  );
};

export default Books;
