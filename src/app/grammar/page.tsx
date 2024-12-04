"use client";

import { useState, useEffect } from "react";

interface Lesson {
  id: number;
  title: string;
}

interface Grammar {
  id: number;
  lessonId: number;
  content: string; // 日文语法
  explanation: string; // 中文解释
}

interface Vocabulary {
  id: number;
  lessonId: number;
  word: string;
  explanation: string; // 单词解释
}

export default function GrammarPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [grammarRules, setGrammarRules] = useState<Grammar[]>([]);
  const [vocabulary, setVocabulary] = useState<Vocabulary[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedGrammar, setSelectedGrammar] = useState<number | null>(null);
  const [selectedVocabulary, setSelectedVocabulary] = useState<number | null>(
    null
  );

  // 模拟加载课程目录
  useEffect(() => {
    const fetchLessons = async () => {
      const data = [
        { id: 1, title: "第一课" },
        { id: 2, title: "第二课" },
        { id: 3, title: "第三课" },
      ];
      setLessons(data);
      setSelectedLesson(data[0]); // 默认选择第一课
    };
    fetchLessons();
  }, []);

  // 根据选中课程加载语法和单词
  useEffect(() => {
    if (selectedLesson) {
      const fetchGrammar = async () => {
        const data = [
          {
            id: 1,
            lessonId: 1,
            content: "xx + は + xx です。",
            explanation: "肯定句：表示 xx 是 xx。例如：（帶補充帶）",
          },
          {
            id: 2,
            lessonId: 1,
            content: "xx + は + xx ではありません。",
            explanation: "否定句：表示 xx 是 xx。例如：（帶補充帶）",
          },
          {
            id: 3,
            lessonId: 1,
            content: "xx + は + xx ですか。",
            explanation: "問句：。例如：（帶補充帶）。",
          },
          {
            id: 4,
            lessonId: 1,
            content: "xx + も + xx です",
            explanation: "表示也是，需要有肯定句做前提。例如：食べて、寝ます。",
          },
          {
            id: 5,
            lessonId: 3,
            content: "い形容词",
            explanation: "表示形容词的变化。例如：高い、高くない。",
          },
          {
            id: 6,
            lessonId: 3,
            content: "な形容词",
            explanation: "表示静态形容词。例如：静か、静かではない。",
          },
        ];
        setGrammarRules(
          data.filter((item) => item.lessonId === selectedLesson.id)
        );
      };

      const fetchVocabulary = async () => {
        const data = [
        //   { id: 1, lessonId: 1, word: "これ", explanation: "这个。" },
        //   { id: 2, lessonId: 1, word: "それ", explanation: "那个。" },
        //   { id: 3, lessonId: 2, word: "行く", explanation: "去。" },
        //   { id: 4, lessonId: 2, word: "見る", explanation: "看。" },
        //   { id: 5, lessonId: 3, word: "高い", explanation: "高的。" },
        //   { id: 6, lessonId: 3, word: "静か", explanation: "安静的。" },
            { id: 3, lessonId: 1, word: "こわ", explanation: "這" },
            { id: 4, lessonId: 1, word: "じしょ", explanation: "字典" },
            { id: 5, lessonId: 1, word: "それ", explanation: "那（離聽話人近的東西）" },
            { id: 6, lessonId: 2, word: "かさ", explanation: "看。" },
            { id: 7, lessonId: 2, word: "この〜", explanation: "看。" },
            { id: 8, lessonId: 2, word: "ポールべン", explanation: "看。" },
            { id: 9, lessonId: 2, word: "そう", explanation: "看。" },
            { id: 10, lessonId: 2, word: "そうです", explanation: "看。" },
            { id: 11, lessonId: 2, word: "ノート", explanation: "看。" },
            { id: 12, lessonId: 2, word: "てらょう", explanation: "看。" },
            { id: 13, lessonId: 2, word: "なん", explanation: "看。" },
            { id: 15, lessonId: 2, word: "めいし", explanation: "看。" },
            { id: 16, lessonId: 2, word: "ざっし", explanation: "看。" },
        ];
        setVocabulary(
          data.filter((item) => item.lessonId === selectedLesson.id)
        );
      };

      fetchGrammar();
      fetchVocabulary();
    }
  }, [selectedLesson]);

  const closeDetails = () => {
    setSelectedGrammar(null);
    setSelectedVocabulary(null);
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      {/* 遮罩层 */}
      {(selectedGrammar !== null || selectedVocabulary !== null) && (
        <div
          onClick={closeDetails}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1,
            cursor: "pointer",
          }}
        />
      )}

      {/* 左侧课程目录 */}
      <aside
        style={{
          zIndex: 2,
          width: "20%",
          backgroundColor: "#111",
          borderRight: "1px solid #333",
          padding: "1rem",
          overflowY: "auto",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>课程目录</h2>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <button
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  marginBottom: "0.5rem",
                  textAlign: "left",
                  backgroundColor:
                    selectedLesson?.id === lesson.id ? "#222" : "#111",
                  border: "1px solid #333",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  color: "#fff",
                }}
                onClick={() => {
                  setSelectedLesson(lesson);
                  closeDetails();
                }}
              >
                {lesson.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* 右侧内容 */}
      <div
        style={{
          zIndex: 2,
          flex: 1,
          display: "flex",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        {/* 语法内容部分 */}
        <section
          style={{
            flex: 6,
            backgroundColor: "#111",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>文法</h2>
          <ul style={{ listStyle: "none", padding: "0" }}>
            {grammarRules.map((rule) => (
              <li key={rule.id}>
                <button
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "1rem",
                    backgroundColor: "#222",
                    border: "1px solid #333",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginBottom: "0.5rem",
                    transition: "background-color 0.3s ease",
                    color: "#fff",
                  }}
                  onClick={() =>
                    setSelectedGrammar(
                      rule.id === selectedGrammar ? null : rule.id
                    )
                  }
                >
                  {rule.content}
                </button>
                {selectedGrammar === rule.id && (
                  <div
                    style={{
                      marginTop: "0.5rem",
                      padding: "1rem",
                      backgroundColor: "#333",
                      border: "1px solid #444",
                      borderRadius: "4px",
                      color: "#ddd",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {rule.explanation}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* 单词部分 */}
        <section
          style={{
            flex: 4,
            backgroundColor: "#111",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>單語</h2>
          <ul style={{ listStyle: "none", padding: "0" }}>
            {vocabulary.map((word) => (
              <li key={word.id}>
                <button
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "0.5rem",
                    backgroundColor: "#222",
                    border: "1px solid #333",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginBottom: "0.5rem",
                    transition: "background-color 0.3s ease",
                    color: "#fff",
                  }}
                  onClick={() =>
                    setSelectedVocabulary(
                      word.id === selectedVocabulary ? null : word.id
                    )
                  }
                >
                  {word.word}
                </button>
                {selectedVocabulary === word.id && (
                  <div
                    style={{
                      marginTop: "0.5rem",
                      padding: "1rem",
                      backgroundColor: "#333",
                      border: "1px solid #444",
                      borderRadius: "4px",
                      color: "#ddd",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {word.explanation}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
