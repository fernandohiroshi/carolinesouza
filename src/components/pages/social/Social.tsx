import { ContainerOne } from './components/container1'
import { ContainerTwo } from './components/container2'
import { ContainerThree } from './components/container3'
import { ContainerFour } from './components/container4'

export default function SocialMedia() {
  return (
    <section className="flex flex-col items-center justify-center md:gap-72">
      {/* CONTAINER 1 */}
      <ContainerOne />

      {/* CONTAINER 2 */}
      <ContainerTwo />

      {/* CONTAINER 3 */}
      <ContainerThree />

      {/* CONTAINER 4 */}
      <ContainerFour />
    </section>
  )
}
