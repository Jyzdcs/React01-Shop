import Title from './components/Title'
import LevelSelect from './components/LevelSelect'

const App = () => {

  return (
    <div>
      <Title  
        classH1="text-center text-3xl p-6 bg-main-yellow m-1" 
        title="Quiz FootBall"
      />
      <LevelSelect
        id = "01"
        classH1 = "text-center text-2xl h-32 pt-8"
        mainDiv = "mt-6"
        title = "Level One"
        button = "Commencer"
        buttonClass = "border-2 border-black ms-80  w-64"
      />
      <LevelSelect
        id = "02"
        classH1 = "text-center text-2xl h-32 pt-8"
        mainDiv = "mt-6"
        title = "Level Two"
        button = "Commencer"
        buttonClass = "border-2 border-black ms-80  w-64 "
      />
      <LevelSelect
        id = "03"
        classH1 = "text-center text-2xl h-32 pt-8"
        mainDiv = "mt-6"
        title = "Level Tree"
        button = "Commencer"
        buttonClass = "border-2 border-black ms-80  w-64 "
      />
    </div>
  )
}

export default App