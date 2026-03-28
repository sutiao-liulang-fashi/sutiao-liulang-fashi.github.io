// ABCJS 类型声明
declare module "abcjs" {
  export interface RenderOptions {
    responsive?: "resize" | "scroll"
    scale?: number
    paddingtop?: number
    paddingbottom?: number
    paddingleft?: number
    paddingright?: number
    generateDownload?: boolean
    generateInline?: boolean
    stretchlast?: boolean
    staffwidth?: number
    wrap?: {
      minSpacing: number
      maxSpacing: number
      preferredMeasuresPerLine: number
    }
  }

  export interface VisualObj {
    lines: any[]
    staff?: any[]
  }

  export interface AudioObj {
    start: () => void
    stop: () => void
  }

  export function renderAbc(
    element: HTMLElement,
    abcString: string,
    options?: RenderOptions
  ): VisualObj[] | AudioObj[]

  export function stopAll(): void

  // Synth 相关类型定义
  export namespace synth {
    interface CursorControl {
      onBeat?: (beatNumber: number, totalBeats: number, totalTime: number) => void
      onEvent?: (event: any) => void
      onFinished?: () => void
    }

    interface SynthOptions {
      visualObj?: VisualObj
      audioContext?: AudioContext
      millisecondsPerMeasure?: number
      bpm?: number
      soundFontUrl?: string
      soundFontVolumeMultiplier?: number
      program?: number
      pan?: number
      voiceParams?: any[]
      callback?: (response: any) => void
      onEnded?: () => void
    }

    class SynthController {
      constructor()
      load(
        element: HTMLElement,
        cursorControl?: CursorControl,
        options?: SynthOptions
      ): void
      setTune(
        visualObj: VisualObj,
        audioContextParam: boolean,
        options?: SynthOptions
      ): Promise<any>
      play(): void
      pause(): void
      restart(): void
      stop(): void
      setProgress(elapsedTime: number, totalTime: number): void
      setWarp(currentTempoPercentage: number): void
      toggleLoop(): void
      dispose(): void
    }

    function registerAudioContext(audioContext: AudioContext): void
    function createSynth(): any
    function supportsAudio(): boolean
  }
}
