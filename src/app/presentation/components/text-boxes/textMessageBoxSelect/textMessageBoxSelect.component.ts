import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface Option {
  id: string;
  text: string;
}

export interface TextMessageBoxEvent {
  prompt: string;
  selectOption: string;
}

@Component({
  selector: 'app-text-message-box-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './textMessageBoxSelect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxSelectComponent {
  @Input() public placeholder: string = '';
  @Input({ required: true }) public options!: Option[];
  @Output() public onMessage = new EventEmitter<TextMessageBoxEvent>();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: ['', Validators.required],
    selectOption: ['', Validators.required]
  });

  handleSubmit() {
    if (this.form.invalid) return;

    const { prompt, selectOption } = this.form.value;

    this.onMessage.emit({ prompt: prompt!, selectOption: selectOption! });
    this.form.reset();
  }
}
