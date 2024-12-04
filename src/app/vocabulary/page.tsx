import vocabulary from '../../content/vocabulary.json';

export default function VocabularyPage() {
  return (
    <div>
      <h1>日语词汇</h1>
      <ul>
        {vocabulary.map((word) => (
          <li key={word.id}>
            <a href={`/vocabulary/${word.id}`}>
              {word.word} ({word.kana})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
