import { useContext } from 'react'
import { editorStateContext, EditorState } from '../pages/edit'
import NodeCommand from './command/nodeCommand'
import PagesCommand from './command/pagesCommand'

/**
 * editorのステータスによってNodeCommand,PagesCommand,PageCommandを表示する
 */
const Command:React.FC = () => {
  const editorStatus:EditorState = useContext(editorStateContext)
  switch (editorStatus.state) {
    case 'Node':
      // nodeステータスの時は、操作説明を表示する
      return <NodeCommand />
    case 'Pages':
      // この段階で、コマンドからドロップをすることでpageステータスに代わり、入力画面になる
      return <PagesCommand nodeIndex={editorStatus.index.nodeIndex} />
    default:
      return <div>editorStatus.stateがエラーです{editorStatus.state}</div>
  }
}

export default Command
