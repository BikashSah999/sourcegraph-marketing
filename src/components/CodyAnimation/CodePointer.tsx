import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { CodyLogo } from '../cody/Atoms'

interface CodePointerProps {
    active: boolean
}

export const CodePointer: FunctionComponent<CodePointerProps> = ({ active = false }) => (
    <div
        className={classNames(
            'absolute right-0 z-50 flex h-full w-[100px] items-center border-r-[1px] border-blue-300 pb-8',
            { 'opacity-0': !active }
        )}
    >
        <div className="rounded bg-gradient-to-l from-blue-300 via-violet-400 to-vermillion-300 p-[1px] ">
            <div className="flex h-[36px] w-[66px] items-center gap-[3px] rounded bg-[#191B21] p-[10px]">
                <CodyLogo width="10px" height="9px" />
                <span className="te text-[13px] font-medium text-gray-200">Cody</span>
            </div>
        </div>
        <div className="h-[1px] w-[49px] flex-1 bg-blue-300" />
    </div>
)
