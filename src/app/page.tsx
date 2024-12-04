export default function Home() {
  return (
    <div>
      {/* <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>欢迎来到日语学习应用</h1> */}
      <p style={{ marginBottom: '2rem' }}>
        {/* 这是一个帮助您学习日语词汇、语法和进行测验的应用。 */}
        选择以下模块开始：
      </p>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="/hiragana" style={cardStyle}>
          <h2>Hiragana Char &rarr;</h2>
          {/* <p>学习和记忆常用日语单词。</p> */}
        </a>
        <a href="/vocabulary" style={cardStyle}>
          <h2>vocabulary &rarr;</h2>
          {/* <p>学习和记忆常用日语单词。</p> */}
        </a>
        <a href="/grammar" style={cardStyle}>
          <h2>grammar &rarr;</h2>
          {/* <p>掌握日语语法规则。</p> */}
        </a>
        <a href="/quizzes" style={cardStyle}>
          <h2>quiz &rarr;</h2>
          {/* <p>通过测验巩固所学内容。</p> */}
        </a>
      </div>
    </div>
  );
}

const cardStyle = {
  display: 'block',
  padding: '1.5rem',
  textDecoration: 'none',
  border: '1px solid #eaeaea',
  borderRadius: '10px',
  transition: 'color 0.3s, border-color 0.3s',
  width: '30%'
};