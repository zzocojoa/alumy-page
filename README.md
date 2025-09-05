import AlumyPixelMatch from './components/AlumyLanding/AlumyPixelMatch';
import './App.css';

function App() {
  return (
    <AlumyPixelMatch />
  );
}

export default App;



import AlumyContentConfigV4 from './components/AlumyLanding/AlumyContentConfigV4';

import './App.css';

function App() {
  return (
    <AlumyContentConfigV4 />
  );
}

export default App;


# 수정 사항 commit 반영 방법
git add .
git commit -m "메인 페이지 디자인 수정"
git push origin main
npm run deploy