import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A meetup',
    image: 'https://lh5.googleusercontent.com/p/AF1QipNvjdUxVnG6CTSwLs1eEQve0yuCOFWzd5wBt99D=w540-h312-n-k-no',
    address: 'Some address',
    description: 'This is the first meetup',
  },
  {
    id: 'm1',
    title: 'A meetup',
    image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ5JlUicOaiO22-Wdi4rp1oa0JkKmOFwm3wok2mm7JTmJBQi3mVh_K8Qa-IUxDfVRUek31_IecTv3ND68n5Q7xJ1EmkKJ5-SknSEM1TsQ',
    address: 'Some address',
    description: 'This is the first meetup',
  }
];

export default function HomePage() {
  return (
      <MeetupList meetups={DUMMY_MEETUPS}/>
  )
}
