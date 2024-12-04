'use client';

import data from '../../content/full-characters.json';
import { useState } from 'react';

export default function HiraganaPage() {
  const [mode, setMode] = useState<'hiragana' | 'romaji'>('hiragana');

  const headers = data.headers;
  const rows = mode === 'hiragana' ? data.rows : data.romaji.rows;

  return (
    <div>
      <h1>完整五十音图</h1>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setMode('hiragana')} style={buttonStyle}>
          平假名
        </button>
        <button onClick={() => setMode('romaji')} style={buttonStyle}>
          罗马字
        </button>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} style={cellStyle}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td style={cellStyle}>{row.rowName}</td>
              {row.columns.map((column, colIndex) => (
                <td key={colIndex} style={cellStyle}>
                  {column || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const buttonStyle = {
  padding: '0.5rem 1rem',
  marginRight: '0.5rem',
  border: '1px solid #ddd',
  borderRadius: '5px',
  cursor: 'pointer',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '1rem',
};

const cellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'center',
};