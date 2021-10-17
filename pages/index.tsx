import Main from '../components/Home/Main';
import MadeWithLove from '../components/MadeWithLove';
import Projects from '../components/Home/Projects';

function Index() {
  return (
    <div>
      <Main />
      <Projects />
      <div class="flex-initial md:hidden py-4">
        <MadeWithLove />
      </div>
    </div>
  );
}

export default Index;
