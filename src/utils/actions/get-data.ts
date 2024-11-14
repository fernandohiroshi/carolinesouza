export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/670604a03f50b63a36f56032?read_key=${process.env.READ_KEY}&props=slug,title,metadata`,
    )

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch data')
  }
}

export async function getDataBranding() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/670eefaa031c6d71de80eb22?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=title,metadata`,
    )

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch data')
  }
}

export async function getDataSocialMedia() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/670f5768031c6d71de80eb7e?read_key=${process.env.READ_KEY}&depth=1&props=title,metadata`,
    )

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch data')
  }
}

export async function getDataUxui() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/672232f52be765525ff94d59?read_key=${process.env.READ_KEY}&depth=1&props=title,metadata`,
    )

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch data')
  }
}

export async function getDataFoto() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/6732434c1b927471f4a678d2?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=title,metadata`,
    )

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch data')
  }
}

export async function getDataPosters() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/67357f9dd24fb1bb49e9ee3f?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=title,metadata`,
    )

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch data')
  }
}

export async function getDataDesign() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/673287b4a40c6c3df2599fc8?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=title%2Cmetadata&limit=10&skip=0&sort=-order`,
    )

    https: if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to fetch data')
  }
}
