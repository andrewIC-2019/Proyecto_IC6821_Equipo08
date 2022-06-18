import { TFuncionario } from "./TFuncionario";
import { Horario } from "./Horario";
import { Division } from "./Division";
import { Usuario } from "./Usuario";

export class Funcionario extends Usuario{

    /**
     * Getter $correoInstitucional
     * @return {string}
     */
	public get $correoInstitucional(): string {
		return this.correoInstitucional;
	}

    /**
     * Getter $notificarCorreoAlterno
     * @return {boolean}
     */
	public get $notificarCorreoAlterno(): boolean {
		return this.notificarCorreoAlterno;
	}

    /**
     * Getter $division
     * @return {Division}
     */
	public get $division(): Division {
		return this.division;
	}

    /**
     * Getter $tipo
     * @return {TFuncionario}
     */
	public get $tipo(): TFuncionario {
		return this.tipo;
	}

    /**
     * Getter $horario
     * @return {Horario[]}
     */
	public get $horario(): Horario[] {
		return this.horario;
	}

    /**
     * Setter $correoInstitucional
     * @param {string} value
     */
	public set $correoInstitucional(value: string) {
		this.correoInstitucional = value;
	}

    /**
     * Setter $notificarCorreoAlterno
     * @param {boolean} value
     */
	public set $notificarCorreoAlterno(value: boolean) {
		this.notificarCorreoAlterno = value;
	}

    /**
     * Setter $division
     * @param {Division} value
     */
	public set $division(value: Division) {
		this.division = value;
	}

    /**
     * Setter $tipo
     * @param {TFuncionario} value
     */
	public set $tipo(value: TFuncionario) {
		this.tipo = value;
	}

    /**
     * Setter $horario
     * @param {Horario[]} value
     */
	public set $horario(value: Horario[]) {
		this.horario = value;
	}
  private correoInstitucional: string;
  private notificarCorreoAlterno: boolean;
  private division: Division;
  private tipo: TFuncionario;
  private horario: Horario[];
}
