import { Injectable } from '@angular/core';
import {
  orthographyUseCae,
  prosConsStreamUseCase,
  prosConsUseCase,
} from '@use-cases/index';
import { from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OpenAiService {
  checkOrthography(prompt: string) {
    return from(orthographyUseCae(prompt));
  }

  prosConsDiscusser(prompt: string) {
    return from(prosConsUseCase(prompt));
  }

  prosConsStreamDiscusser(prompt: string, abortSignal: AbortSignal) {
    return prosConsStreamUseCase(prompt, abortSignal);
  }
}
