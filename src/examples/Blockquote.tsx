

const Blockquote = ({name, episode}: {name?: string, episode?: string}) => {
  return (
    <blockquote className="blockquote text-end">
    <p className="mb-1">{name}</p>
    <footer className="blockquote-footer">{episode}</footer>
</blockquote>
  )
}

export default Blockquote
