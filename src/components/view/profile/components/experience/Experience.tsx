import { getDataHome } from '@/utils/actions/get-data'
import { HomeProps } from '@/utils/types/home.type'

import Box from '@/components/grid/Box'

export async function Experiences() {
  const { object }: HomeProps = await getDataHome()
  const { experiencia, formacao } = object.metadata

  return (
    <Box className="col-span-12 lg:col-span-8 lg:row-span-3">
      <div className="flex grid-cols-12 flex-col gap-4 lg:grid lg:gap-8">
        {/* EXPERIENCES */}
        <div className="col-span-6">
          <h2 className="mb-2 text-xl font-semibold lg:mb-4">Experiências</h2>
          {experiencia.map((e, index) => (
            <div key={e.empresa} className="flex flex-col gap-2">
              <h3 className="text-sm">{e.empresa}</h3>
              <p className="text-xs lg:mb-4">{e.tempo_de_trabalho}</p>
              <p
                className={`mb-2 text-justify text-xs text-neutral-700 ${
                  index === experiencia.length - 1 ? '' : 'border-b'
                } pb-2`}
              >
                {e.cargo}
              </p>
            </div>
          ))}
        </div>

        {/* GRADUATION */}
        <div className="col-span-6">
          <h2 className="mb-2 text-xl font-semibold lg:mb-4">Formação</h2>
          {formacao.map((f, index) => (
            <div key={f.curso} className="flex flex-col gap-2">
              <h3 className="text-sm">{f.curso}</h3>
              <p
                className={`mb-2 text-justify text-xs text-neutral-700 ${
                  index === formacao.length - 1 ? '' : 'border-b'
                } pb-2`}
              >
                {f.instituicao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Box>
  )
}
