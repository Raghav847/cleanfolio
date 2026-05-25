import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experience</h2>

      <div className='experience__list'>
        {experience.map((item) => (
          <article key={uniqid()} className='experience__item'>
            <div className='experience__meta'>
              <span className='experience__type'>{item.type}</span>
              <span className='experience__date'>{item.date}</span>
            </div>

            <h3>{item.title}</h3>
            <p className='experience__org'>
              {item.organization}
              {item.location ? ` | ${item.location}` : ''}
            </p>

            {item.highlights?.length ? (
              <ul className='experience__highlights'>
                {item.highlights.map((highlight) => (
                  <li key={uniqid()}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
