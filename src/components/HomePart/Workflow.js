import React from 'react';
import { LightBulbIcon, LightningBoltIcon, LoginIcon, TableIcon } from '@heroicons/react/outline';
import '../HomePart/Workflow.css';

const features = [
  {
    name: 'Register or Login',
    description:
      'Please register or login to your Inquizable account. Become an Inquizer today!',
    icon: LoginIcon,
  },
  {
    name: 'Choose your desired category',
    description:
      'Inquizable provides their users with many categories and sub-categories. The Inquizers can choose their desired category in order to test their knowledge.',
    icon: LightBulbIcon,
  },
  {
    name: 'Start a single game or compete with other Inquizers',
    description:
      'Inquizable offers their Inquizers a single game option to test their knowledge or to prepare for a competition. The Inquizers earn points for each completed game.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Compare yourself with other Inquizers',
    description:
      'Compare yourself on a global leadearboard with other Inquizers. Invite your friends to a challenge and play against them in a fun competition. (Coming Soon...)',
    icon: TableIcon,
  },
]

export default function Workflow() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How it works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A learning platform to ignite your brain.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Inquizable is a fun learning platform, where anyone can contribute and compete with other users.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md workflow-icon text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
