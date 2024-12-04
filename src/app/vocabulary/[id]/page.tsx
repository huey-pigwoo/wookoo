import vocabulary from '../../../content/vocabulary.json';

export default function WordDetail({ params }: { params: { id: string } }) {
  const word = vocabulary.find((w) => w.id === params.id);

  if (!word) {
    return <p>单词未找到</p>;
  }

  return (
    <div>
      <h1>{word.word} ({word.kana})</h1>
      <p>罗马字: {word.romaji}</p>
      <p>释义: {word.meaning}</p>
    </div>
  );
}