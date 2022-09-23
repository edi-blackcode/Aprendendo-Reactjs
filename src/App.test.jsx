import { test, describe } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
//import userEvent from '@testinf-library/use-event'
import App from './App'

 /**
* @vitest-environment jsdom
*/

test('', () => {
//renderizar meu componente
render(<App />)

//capturar o elemento que eu vou testar
const texto = screen.getByText('Falar aqui sobre o consumo de API')

//dizer o que eu espero
expect(texto).toBeInTheDocument()
})